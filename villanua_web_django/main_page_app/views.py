from asgiref.sync import async_to_sync, sync_to_async

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from langchain_core.messages import AIMessage

from villanua_web_project.shared.utils import logger
from ada_chatbot.graph import get_ada_graph
from ada_chatbot.utils import load_chat_model
from .models import ChatConversation, ChatMessage


# Create your views here.
def index(request):
    return render(request, 'main_page_app/main.html')



@api_view(['POST'])
def ada_bot(request):
    """Handle messages from the Ada Bot chat interface."""
    async def handle_async(request):
        user_message = request.data.get('message', '')
        conversation_id = request.data.get('conversation_id', None)
        ai_message = None

        if conversation_id:
            # Load existing conversation
            try:
                conversation = await sync_to_async(ChatConversation.objects.get)(conversation_id=conversation_id)
            except ChatConversation.DoesNotExist:
                return Response({
                    "status": "error",
                    "message": "Conversation not found",
                }, status=404)
        else:
            # Create new conversation
            conversation = await sync_to_async(ChatConversation.objects.create)()

        ada_graph = get_ada_graph()

        #TODO: ELIMINAR ESTO CUANDO SE HAYAN AÑADIDO MEDIDAS DE SEGURIDAD

        # Save the user and AI messages to the database
        await sync_to_async(ChatMessage.objects.create)(
            conversation=conversation,
            sender="user",
            content=user_message
        )
        await sync_to_async(ChatMessage.objects.create)(
            conversation=conversation,
            sender="ai",
            content=""
        )

        llm = load_chat_model()

        response_stream = llm.stream(user_message)
        collected = ""

        for chunk in response_stream:
            content = chunk.content if hasattr(chunk, "content") else str(chunk)
            print(content, end="", flush=True)
            collected += content

        return Response({
            "status": "error",
            "message": "No AI message found",
            "conversation_id": conversation.conversation_id,
            "error": "Deactivated LLM calls."
        }, status=400)

        ##################################

        # Invoke the Ada graph with the user message
        res = await ada_graph.ainvoke(
            {"messages": [("user", user_message)], "chat_log": []},
            {"configurable": {"system_prompt": "You are a helpful AI assistant."}},
        )

        ai_message = next((message for message in res['messages'] if isinstance(message, AIMessage)), None)

        # Save the user and AI messages to the database
        await sync_to_async(ChatMessage.objects.create)(
            conversation=conversation,
            sender="user",
            content=user_message
        )
        await sync_to_async(ChatMessage.objects.create)(
            conversation=conversation,
            sender="ai",
            content=ai_message.content
        )
        if ai_message:
            return Response({
                "status": "success",
                "message": ai_message.content,
                "conversation_id": conversation.conversation_id
            }, status=200)

        return Response({
            "status": "error",
            "message": "No AI message found",
            "conversation_id": conversation.conversation_id
        }, status=400)

    return async_to_sync(handle_async)(request)
