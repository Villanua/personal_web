from django.urls import path

from main_page_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ada_bot', views.ada_bot, name='ada_bot'),
]