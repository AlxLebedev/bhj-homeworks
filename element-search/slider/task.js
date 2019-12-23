const sliders = document.querySelectorAll('.slider__item');
const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let currentSlide = 0;

prevButton.onclick = function() {
    if (currentSlide === 0) {
        sliders[currentSlide].classList.remove('slider__item_active');
        sliders[sliders.length - 1].classList.add('slider__item_active');
        currentSlide = sliders.length - 1;
    } else {
        sliders[currentSlide].classList.remove('slider__item_active');
        sliders[currentSlide - 1].classList.add('slider__item_active');
        currentSlide--;
    }
};

nextButton.onclick = function() {
    if (currentSlide === sliders.length - 1) {
        sliders[currentSlide].classList.remove('slider__item_active');
        sliders[0].classList.add('slider__item_active');
        currentSlide = 0;
    } else {
        sliders[currentSlide].classList.remove('slider__item_active');
        sliders[currentSlide + 1].classList.add('slider__item_active');
        currentSlide++;
    }
};

dots.forEach((dot, i) => {
    dot.onclick = function() {
        sliders[currentSlide].classList.remove('slider__item_active');
        currentSlide = i;
        sliders[currentSlide].classList.add('slider__item_active');
    }
});