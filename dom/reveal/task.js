const reverals = Array.from(document.querySelectorAll('.reveal'));
let currentReveral = 0;

function showIfInViewPort(element) {
    
    const viewPortHeight = window.innerHeight;
    const elementLocation = element.getBoundingClientRect();
    let onViewPort = false;

    if (elementLocation.top >= 0 || elementLocation.bottom >= 0) {
        onViewPort = elementLocation.top < viewPortHeight ? true : false;
    }
    
    if (onViewPort) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    }

    if (reverals[0].getBoundingClientRect().top < (-viewPortHeight)) { //не очень-то мне нравится мой способ смены элемента. А если их на странице 33 штуки как быть?
        currentReveral = 1;
    } else {
        currentReveral = 0;
    }
}

window.onscroll = function() {
    showIfInViewPort(reverals[currentReveral]);
}