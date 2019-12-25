const countdownTimer = function() {
    const timer = document.getElementById('timer');

    const timerElements = timer.textContent;
    const arr = timerElements.split(':');   
    let hour = arr[0];
    let min = arr[1];
    let sec = arr[2];    

    if (sec == 0) {
        if (min == 0) {
            if (hour == 0) {
                clearInterval(сount);        
                alert('Вы победили в конкурсе!');
                return;
            }
            
            hour--;
            min = 60;
            sec = 60;

            if (hour < 10) {
                hour = '0' + hour;
            }
        }

        min--;
        sec = 60;

        if (min < 10) {
            min = '0' + min;
        }
    }

    sec--;

    if (sec < 10) {
        sec = '0' + sec;
    }

    currentTime = `${hour}:${min}:${sec}`;

    document.getElementById('timer').innerHTML = currentTime;       
}

const сount = setInterval(countdownTimer, 1000);