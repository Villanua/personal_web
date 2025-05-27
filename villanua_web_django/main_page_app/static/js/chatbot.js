const roboticsLogo = `\
<div class="logo">\
    <div class="robot">\
        <div class="head">\
            <div class="face">\
                <div class="eye left"></div>
                <div class="eye right"></div>
                <div class="mouth">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" 
                viewBox="0 0 800 800">
                    <g stroke-width="49" stroke="hsl(0, 0%, 100%)" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(128, 400, 400)">
                    <path d="M250 253.01633644104004Q330 204.01633644104004 550 553.01633644104" marker-end="url(#SvgjsMarker1500)">
                    </path>
                    </g>
                    <defs>
                    <marker markerWidth="1" markerHeight="1" refX="0.5" refY="0.5" viewBox="0 0 1 1" orient="auto" id="SvgjsMarker1500">
                        <polygon points="0,1 0,0 1,0.5" fill="hsl(0, 0%, 100%)">
                        </polygon>
                    </marker>
                    </defs>
                </svg>
                </div>
            </div>
        </div>
        <div class="antenna"></div>
        <div class="ear left"></div>
        <div class="ear right"></div>
    </div>
</div>
`

$(document).ready(function() {
    

    // Toggle visibility of pulsing container and chatbot panel
    $('#chatbot-pulsing-container .inner').click(function() {
        console.log("Pulsing container clicked");
        $('#chatbot-pulsing-container').hide(); // Hide the pulsing container
        $('#chatbot-panel').css('display', 'flex'); // Show the chatbot panel with flex display
    });

    // Hide chatbot panel and show pulsing container when clicking outside the chatbot panel
    $(document).click(function(event) {
        var clickTarget = $(event.target);
        var isChatbotPanel = clickTarget.closest('#chatbot-panel').length > 0;
        var isPulsingContainer = clickTarget.closest('#chatbot-pulsing-container').length > 0;

        if (!isChatbotPanel && !isPulsingContainer) {
            $('#chatbot-panel').hide(); // Hide the chatbot panel
            $('#chatbot-pulsing-container').show(); // Show the pulsing container
        }
    });

    // Handle Enter key press in input field
    $('#user-input').keypress(function(e) {
        if (e.which === 13) { // Enter key code
            e.preventDefault();
            sendMessage();
        }
    });

    // Send button click handler
    $('.chatbot-send-btn').click(function() {
        sendMessage();
    });

    // Function to send messages
    function sendMessage() {
        const userInput = $('#user-input').val().trim();
        if (userInput === '') return;

        // Add user message to chat
        addUserMessageToChat(userInput);
        
        // Clear input field
        $('#user-input').val('');

        // Show typing indicator
        addTypingIndicator();

        // Send AJAX request
        $.ajax({
            url: '/api/adabot', // Replace with your actual endpoint
            type: 'POST',
            data: {
                message: userInput,
                csrfmiddlewaretoken: getCsrfToken() // You need to implement this function
            },
            success: function(response) {
                // Remove typing indicator
                removeTypingIndicator();
                // Add bot response to chat
                addBotMessageToChat(response.message || "I'm sorry, I couldn't process your request.");
            },
            error: function() {
                // Remove typing indicator
                removeTypingIndicator();
                // Add error message - updated to indicate bot is deactivated
                addBotMessageToChat("I'm sorry, I'm currently deactivated and cannot respond to you.");
            }
        });
    }

    // Helper function to get CSRF token
    function getCsrfToken() {
        return $('input[name="csrfmiddlewaretoken"]').val() || 
               document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || 
               '';
    }

    // Function to add user message to chat
    function addUserMessageToChat(message) {
        const messageHtml = `
            <div class="message user-message">
                <div class="message-content">${message}</div>
            </div>
        `;
        $('#chat-log').append(messageHtml);
        scrollChatToBottom();
    }

    // Function to add bot message to chat
    function addBotMessageToChat(message) {
        const messageHtml = `
            <div class="message bot-message">
                <div class="message-content">${message}</div>
            </div>
        `;
        $('#chat-log').append(messageHtml);
        scrollChatToBottom();
    }

    // Function to add typing indicator
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
    }

    // Function to remove typing indicator
    function removeTypingIndicator() {
        $('#chat-log .typing-indicator').remove();
    }

    // Function to scroll chat to bottom
    function scrollChatToBottom() {
        const chatLog = document.getElementById('chat-log');
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Prevent hiding when clicking inside the chatbot panel
    $('#chatbot-panel').click(function(event) {
        event.stopPropagation();
    });
});

