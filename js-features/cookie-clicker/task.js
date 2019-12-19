const onloadPageTime = new Date();

const countEl = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const delayEl = document.getElementById('delay__counter')

let count = null;
let delay = null;

let evenClick = null;
let notEvenClick = null;

cookie.onclick = () => {
    if(count % 2 === 0) {
        cookie.width = 250;
        evenClick = new Date();
    } else {
        cookie.width = 200;
        notEvenClick = new Date();
    }
    count++;
    countEl.textContent = count;

    if (count === 1) {
        delay = (evenClick - onloadPageTime) / 1000; //так как задержка высчитывается в мс, то переводим в секунды
    } else {
        if (count % 2 === 0) {
            delay = (notEvenClick - evenClick) / 1000;
        } else {
            delay = (evenClick - notEvenClick) / 1000;
        }
        
    }

    delayEl.textContent = (1 / delay).toFixed(2); //скорость клика = 1 / задержку межру кликами в секундах
}