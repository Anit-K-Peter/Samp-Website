document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');
    const chatPopup = document.getElementById('chat-popup');
    const closeButton = document.getElementById('close-btn');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');
    const chatBody = document.getElementById('chat-body');

    // Open chat popup
    chatButton.addEventListener('click', function() {
        chatPopup.style.display = 'block';
    });

    // Close chat popup
    closeButton.addEventListener('click', function() {
        chatPopup.style.display = 'none';
    });

    // Handle sending messages
    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            appendMessage('sent', userMessage);
            userInput.value = '';
            // Simulate AI response (you can replace this with actual API call or logic)
            simulateAIResponse(userMessage);
        }
    });

    // Handle Enter key press
    userInput.addEventListener('keypress', function(event) {
        const userMessage = userInput.value.trim();
        if (event.key === 'Enter') {
            userInput.value = '';
            simulateAIResponse(userMessage);
        }
    });

    // Simulate AI response from JSON file
    function simulateAIResponse(userMessage) {
        // Simulate asynchronous response (fetch from JSON file)
        setTimeout(() => {
            fetch('chatbot.json')
                .then(response => response.json())
                .then(data => {
                    const aiResponse = data[userMessage.toLowerCase()];
                    if (aiResponse) {
                        appendMessage('received', aiResponse);
                    } else {
                        appendMessage('received', "I'm sorry, I don't understand.");
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    appendMessage('received', "I'm sorry, there was an error.");
                });
        }, 1000); // Simulate delay for realistic feel
    }

    // Append message to chat body
    function appendMessage(type, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerHTML = `<p>${message}</p>`;
        chatBody.appendChild(messageElement);
        // Auto-scroll chat to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
