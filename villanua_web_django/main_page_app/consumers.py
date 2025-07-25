from channels.generic.websocket import AsyncWebsocketConsumer
import json

class AdaBotConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        user_message = data.get('message', '')
        conversation_id = data.get('conversation_id', None)

        # Simulate streaming response from LLM
        response_stream = ["Hello", " there!", " How can I assist you?"]

        for chunk in response_stream:
            await self.send(text_data=json.dumps({
                'message': chunk,
                'conversation_id': conversation_id
            }))