// HTML for the robotics logo (not used directly in this script)
const roboticsLogo = `\
<div class="logo">\
    <div class="robot">\
        <div class="head">\
            <div class="face">\
                <div class="eye left"></div>\
                <div class="eye right"></div>\
                <div class="mouth">\
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" \
                viewBox="0 0 800 800">\
                    <g stroke-width="49" stroke="hsl(0, 0%, 100%)" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(128, 400, 400)">\
                    <path d="M250 253.01633644104004Q330 204.01633644104004 550 553.01633644104" marker-end="url(#SvgjsMarker1500)">\
                    </path>\
                    </g>\
                    <defs>\
                    <marker markerWidth="1" markerHeight="1" refX="0.5" refY="0.5" viewBox="0 0 1 1" orient="auto" id="SvgjsMarker1500">\
                        <polygon points="0,1 0,0 1,0.5" fill="hsl(0, 0%, 100%)">\
                        </polygon>\
                    </marker>\
                    </defs>\
                </svg>\
                </div>\
            </div>\
        </div>\
        <div class="antenna"></div>\
        <div class="ear left"></div>\
        <div class="ear right"></div>\
    </div>\
</div>\
`;

$(document).ready(function() {

    let conversationId = null; // Initialize conversation ID

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
     * Send user message and quick-btn states to the backend via WebSocket.
     */
    function sendMessage() {
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
        console.log("Info: Quick button states for WebSocket:", quickBtnStates);

        // Prepare WebSocket data payload
        const chatLog = [];
        $('#chat-log .message').each(function() {
            const messageContent = $(this).find('.message-content').text().trim();
            const messageType = $(this).hasClass('user-message') ? 'user' : 'bot';
            chatLog.push({ type: messageType, content: messageContent });
        });

        const ajaxData = {
            message: userInput,
            chatLog: chatLog, // Include the entire conversation
            conversation_id: conversationId || null, // Include conversation ID if it exists
            csrfmiddlewaretoken: getCsrfToken(),
            allow_web_navigation: quickBtnStates['allow_web_navigation'] || false,
            internet_search: quickBtnStates['internet_search'] || false
        };

        // Send WebSocket request to backend
        const socket = new WebSocket('ws://' + window.location.host + '/ws/ada_bot/');

        socket.onopen = function() {
            console.log("WebSocket connection established.");
            socket.send(JSON.stringify(ajaxData)); // Send the data to the WebSocket server
        };

        socket.onmessage = function(event) {
            const response = JSON.parse(event.data);
            console.log("WebSocket message received:", response);
            conversationId = response.conversation_id || conversationId; // Update conversation ID if provided

            // Find the last bot message in the chat log
            let lastBotMessage = $('#chat-log .bot-message:last .message-content');

            if (lastBotMessage.length === 0) {
                // If no bot message exists, create a new one
                removeTypingIndicator();
                addBotMessageToChat(response.message || "");
            } else {
                // Update the content of the last bot message
                lastBotMessage.html(lastBotMessage.html() + response.message);
            }
        };

        socket.onerror = function(error) {
            console.error("WebSocket error:", error);
            removeTypingIndicator();
            addBotMessageToChat("I'm sorry, I'm currently deactivated and cannot respond to you. Contact with the owner Ignacio Villanúa.");
        };

        socket.onclose = function() {
            console.log("WebSocket connection closed.");
        };
    }

    /**
     * Helper function to get CSRF token from input or meta tag.
     * @returns {string} CSRF token
     */
    function getCsrfToken() {
        const csrfTokenFromInput = document.querySelector('input[name="csrfmiddlewaretoken"]')?.value;
        const csrfTokenFromMeta = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        if (csrfTokenFromInput) {
            return csrfTokenFromInput;
        } else if (csrfTokenFromMeta) {
            return csrfTokenFromMeta;
        } else {
            console.warn("CSRF token not found in input or meta tag.");
            return '';
        }
    }

    /**
     * Add a user message to the chat log.
     * @param {string} message - The user message to display.
     */
    function addUserMessageToChat(message) {
        const messageHtml = `
            <div class="message user-message">
                <div class="message-content">${message}</div>
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
                <div class="message-content">${message}</div>
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
});

