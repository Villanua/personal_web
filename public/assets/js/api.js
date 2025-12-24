// API Configuration
const API_CONFIG = {
    baseURL: 'http://localhost:8000', // Change this to your FastAPI backend URL
    endpoints: {
        chatbot: '/api/adabot'
    }
};

/**
 * Send a message to the chatbot API
 * @param {string} message - User message
 * @param {Object} options - Additional options (allow_web_navigation, internet_search)
 * @returns {Promise} - API response
 */
async function sendChatMessage(message, options = {}) {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.chatbot}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                allow_web_navigation: options.allow_web_navigation || false,
                internet_search: options.internet_search || false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending message to API:', error);
        throw error;
    }
}

/**
 * Check API health/status
 * @returns {Promise} - API health status
 */
async function checkAPIHealth() {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}/health`);
        return response.ok;
    } catch (error) {
        console.error('API health check failed:', error);
        return false;
    }
}

export { sendChatMessage, checkAPIHealth, API_CONFIG };
