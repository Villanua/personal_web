"""
ASGI config for villanua_web_project project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from main_page_app.consumers import AdaBotConsumer
from django.urls import path

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'villanua_web_project.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter([
            path("ws/ada_bot/", AdaBotConsumer.as_asgi()),
        ])
    ),
})
