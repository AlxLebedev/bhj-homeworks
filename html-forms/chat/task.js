const chatButton = document.querySelector('.chat-widget__side');

const chatArea = document.querySelector('.chat-widget');
const messagesArea = document.getElementById('chat-widget__messages');
const inputField = document.getElementById('chat-widget__input');

const chatBotPhrases = [
    'Hallo!', 'What do you want from me?', 'I don`t care...', 'Get out of here!'
];

let timer;

function inaction() {
    timer = setInterval(() => {
        
        messagesArea.innerHTML += `
            <div class="message">
                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                <div class="message__text">Ask me something...</div>
            </div>
        `;

    }, 10000);
};

function clearTimer() {
    clearInterval(timer);
};

chatButton.addEventListener('click', function(event) {
    chatArea.classList.add('chat-widget_active');
    inputField.value = '';
    inaction();
});

inputField.addEventListener('input', function() {
    clearTimer();
    inaction();
});

inputField.addEventListener('keyup', function(event) {
    if (event.keyCode == 13 && inputField.value != '') {
        
        messagesArea.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                <div class="message__text">${event.target.value}</div>
            </div>
        `;

        inputField.value = '';

        let random = Math.floor(Math.random() * chatBotPhrases.length);
        messagesArea.innerHTML += `
            <div class="message">
                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                <div class="message__text">${chatBotPhrases[random]}</div>
            </div>
        `;
    }
})