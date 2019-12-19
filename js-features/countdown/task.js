const timerEl = document.getElementById('timer');
const timerText = document.getElementById('timerText');
let count = document.getElementById('timer').textContent;

const timer = setInterval(() => {
  if (timerEl.textContent < 11) {
      timerText.textContent = 'До окончания конкурса осталось секунд: 0';
  }

    timerEl.textContent -= 1;
    count--;
    if (count === 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    }
}, 1000);