const sliders = document.querySelectorAll('.slider__item');
const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let currentSlide = 0;
let nextSlide = null;

function clearDotsIndicators() {
    for (dot of dots) {
        if (dot.classList.contains('slider__dot_active')) {
            dot.classList.remove('slider__dot_active');
        }
    }
};

function setDotIndicator(dotNumber) {
    dots[dotNumber].classList.add('slider__dot_active');
}

function changeSlide(slide) {
    sliders[currentSlide].classList.remove('slider__item_active');
    currentSlide = slide;
    sliders[slide].classList.add('slider__item_active');
    clearDotsIndicators();
    setDotIndicator(slide);
}

setDotIndicator(currentSlide);

prevButton.onclick = function() {
    if (currentSlide === 0) {     
        nextSlide = sliders.length - 1;
        changeSlide(nextSlide);
    } else {
        nextSlide = currentSlide - 1;
        changeSlide(nextSlide);
    }
};

nextButton.onclick = function() {
    if (currentSlide === sliders.length - 1) {
        nextSlide = 0;
        changeSlide(nextSlide);
    } else {
        nextSlide = currentSlide + 1;
        changeSlide(nextSlide);
    }
};

dots.forEach((dot, i) => {
    dot.onclick = function() {
        nextSlide = i;
        changeSlide(nextSlide);
    }
});