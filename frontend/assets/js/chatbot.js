// Chatbot Configuration
const CHATBOT_CONFIG = {
    apiBaseURL: 'http://localhost:8000', // Change this to your FastAPI backend URL
    endpoint: '/api/adabot'
};

$(document).ready(function() {
    // Show chatbot panel and hide pulsing container when the inner circle is clicked
    $('#chatbot-pulsing-container .inner').click(function() {
        console.log("Pulsing container clicked. Showing chatbot panel.");
        $('#chatbot-pulsing-container').hide();
        $('#chatbot-panel').css('display', 'flex');
    });

    // Hide chatbot panel and show pulsing container when close button is clicked
    $('#chatbot-close-btn').click(function() {
        console.log("Chatbot close button clicked. Hiding chatbot panel.");
        $('#chatbot-panel').hide();
        $('#chatbot-pulsing-container').show();
    });

    // Hide chatbot panel and show pulsing container when clicking outside the chatbot panel
    $(document).click(function(event) {
        var clickTarget = $(event.target);
        var isChatbotPanel = clickTarget.closest('#chatbot-panel').length > 0;
        var isPulsingContainer = clickTarget.closest('#chatbot-pulsing-container').length > 0;

        if (!isChatbotPanel && !isPulsingContainer) {
            console.log("Clicked outside chatbot. Hiding chatbot panel.");
            $('#chatbot-panel').hide();
            $('#chatbot-pulsing-container').show();
        }
    });

    // Prevent hiding when clicking inside the chatbot panel
    $('#chatbot-panel').click(function(event) {
        // Prevent event from bubbling up to document click
        event.stopPropagation();
    });

    // Handle Enter key press in input field to send message
    $('#user-input').keypress(function(e) {
        if (e.which === 13) { // Enter key code
            e.preventDefault();
            console.log("Enter key pressed. Sending message.");
            sendMessage();
        }
    });

    // Handle send button click to send message
    $('.chatbot-send-btn').click(function() {
        console.log("Send button clicked. Sending message.");
        sendMessage();
    });

    // Toggle active state for quick reply buttons
    $('.chatbot-quick-replies').on('click', '.quick-btn', function() {
        $(this).toggleClass('active');
        console.log("Quick reply button toggled. State:", $(this).text().trim(), $(this).hasClass('active'));
    });

    /**
     * Send user message and quick-btn states to the backend via Fetch API.
     */
    async function sendMessage() {
        const userInput = $('#user-input').val().trim();
        if (userInput === '') {
            console.log("Info: Empty input. No message sent.");
            return;
        }

        // Add user message to chat
        addUserMessageToChat(userInput);

        // Clear input field
        $('#user-input').val('');

        // Show typing indicator
        addTypingIndicator();

        // Collect quick-btn states as booleans
        const quickBtnStates = {};
        $('.chatbot-quick-replies .quick-btn').each(function() {
            // Use normalized button text as key
            const key = $(this).text().trim().replace(/\s+/g, '_').toLowerCase();
            quickBtnStates[key] = $(this).hasClass('active');
        });
        console.log("Info: Quick button states:", quickBtnStates);

        // Prepare request data
        const requestData = {
            message: userInput,
            allow_web_navigation: quickBtnStates['allow_web_navigation'] || false,
            internet_search: quickBtnStates['internet_search'] || false
        };

        try {
            // Send request to backend using Fetch API
            const response = await fetch(`${CHATBOT_CONFIG.apiBaseURL}${CHATBOT_CONFIG.endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success: Bot response received.", data);
            removeTypingIndicator();
            addBotMessageToChat(data.message || "I'm sorry, I couldn't process your request.");

        } catch (error) {
            console.error("Error: Request failed.", error);
            removeTypingIndicator();
            addBotMessageToChat("I'm sorry, I'm currently deactivated and cannot respond to you.");
        }
    }

    /**
     * Add a user message to the chat log.
     * @param {string} message - The user message to display.
     */
    function addUserMessageToChat(message) {
        const messageHtml = `
            <div class="message user-message">
                <div class="message-content">${escapeHtml(message)}</div>
            </div>
        `;
        $('#chat-log').append(messageHtml);
        scrollChatToBottom();
        console.log("UI: User message added to chat.");
    }

    /**
     * Add a bot message to the chat log.
     * @param {string} message - The bot message to display.
     */
    function addBotMessageToChat(message) {
        const messageHtml = `
            <div class="message bot-message">
                <div class="message-content">${escapeHtml(message)}</div>
            </div>
        `;
        $('#chat-log').append(messageHtml);
        scrollChatToBottom();
        console.log("UI: Bot message added to chat.");
    }

    /**
     * Add a typing indicator to the chat log.
     */
    function addTypingIndicator() {
        const typingHtml = `
            <div class="message bot-message typing-indicator">
                <div class="dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        `;
        $('#chat-log').append(typingHtml);
        scrollChatToBottom();
        console.log("UI: Typing indicator shown.");
    }

    /**
     * Remove typing indicator from the chat log.
     */
    function removeTypingIndicator() {
        $('#chat-log .typing-indicator').remove();
        console.log("UI: Typing indicator removed.");
    }

    /**
     * Scroll the chat log to the bottom.
     */
    function scrollChatToBottom() {
        const chatLog = document.getElementById('chat-log');
        if (chatLog) {
            chatLog.scrollTop = chatLog.scrollHeight;
        }
    }

    /**
     * Escape HTML to prevent XSS attacks
     * @param {string} text - Text to escape
     * @returns {string} - Escaped text
     */
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
});
