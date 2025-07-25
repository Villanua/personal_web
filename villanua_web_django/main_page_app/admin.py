from django.contrib import admin
from .models import ChatConversation, ChatMessage

class ChatMessageInline(admin.TabularInline):
    model = ChatMessage
    extra = 0
    fields = ('content', 'created_at')
    readonly_fields = ('content', 'created_at')  # Include sender as readonly
    can_delete = False

class ChatConversationAdmin(admin.ModelAdmin):
    list_display = ('conversation_id', 'created_at')
    readonly_fields = ('conversation_id', 'created_at')
    inlines = [ChatMessageInline]

admin.site.register(ChatConversation, ChatConversationAdmin)
