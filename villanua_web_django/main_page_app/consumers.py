import os
import asyncio
import json
from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from ada_chatbot.utils import load_chat_model
from ada_chatbot.graph import get_ada_graph
from villanua_web_project.shared.utils import logger

class AdaBotConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        self.conversation = None

    async def disconnect(self, close_code):
        # Log the disconnection and clean up resources if needed
        print(f"Connection closed with code {close_code}")
        # await self.close()

    async def receive(self, text_data):
        from .models import ChatConversation, ChatMessage

        data = json.loads(text_data)
        user_message = data.get('message', '')
        conversation_id = data.get('conversation_id', None)

        if conversation_id:
            # Load existing conversation
            try:
                conversation = await sync_to_async(ChatConversation.objects.get)(conversation_id=conversation_id)
            except ChatConversation.DoesNotExist:
                await self.send(text_data=json.dumps({
                    "status": "error",
                    "message": "Conversation not found",
                }))
                return
        else:
            # Create new conversation
            conversation = await sync_to_async(ChatConversation.objects.create)()

        # Save the user message to the database
        await sync_to_async(ChatMessage.objects.create)(
            conversation=conversation,
            sender="user",
            content=user_message
        )

        self.conversation = conversation
        if os.getenv("CHAT_ACTIVATED", "False") == "True":
            # Launch streaming response without blocking
            asyncio.create_task(self.stream_llm_response(user_message))
        else:
            await self.send(text_data=json.dumps({
                "status": "error",
                "message": "I'm sorry, I'm currently deactivated and cannot respond to you. Contact with the owner Ignacio Villanúa."
            }))
            await self.close()

    async def stream_llm_response(self, user_message):
        from .models import ChatMessage

        llm = load_chat_model()
        response_stream = llm.astream(user_message)
        collected = ""

        try:
            async for chunk in response_stream:
                logger.debug(f"Received chunk: {chunk}")
                content = chunk.content if hasattr(chunk, "content") else str(chunk)
                collected += content
                await self.send(text_data=json.dumps({
                    "status": "success",
                    "message": content,
                    "conversation_id": str(self.conversation.conversation_id)
                }))
            # Save the complete AI message to the database
            await sync_to_async(ChatMessage.objects.create)(
                conversation=self.conversation,
                sender="ai",
                content=collected
            )
        finally:
            logger.info("Streaming completed for conversation %s", self.conversation.conversation_id)
            # Ensure the connection is closed after streaming
            await self.close()