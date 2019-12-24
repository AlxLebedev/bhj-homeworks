const sliders = document.querySelectorAll('.slider__item');
const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let currentSlide = 0;

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

setDotIndicator(currentSlide);

prevButton.onclick = function() {
    if (currentSlide === 0) {
        
        sliders[currentSlide].classList.remove('slider__item_active');
        currentSlide = sliders.length - 1;
        sliders[currentSlide].classList.add('slider__item_active');
        clearDotsIndicators();
        setDotIndicator(currentSlide);

    } else {
        sliders[currentSlide].classList.remove('slider__item_active');
        currentSlide--;
        sliders[currentSlide].classList.add('slider__item_active');
        clearDotsIndicators();
        setDotIndicator(currentSlide);
    }
};

nextButton.onclick = function() {
    if (currentSlide === sliders.length - 1) {
        sliders[currentSlide].classList.remove('slider__item_active');
        currentSlide = 0;
        sliders[currentSlide].classList.add('slider__item_active');
        clearDotsIndicators();
        setDotIndicator(currentSlide);
    } else {
        sliders[currentSlide].classList.remove('slider__item_active');
        currentSlide++;
        sliders[currentSlide].classList.add('slider__item_active');
        clearDotsIndicators();
        setDotIndicator(currentSlide);
    }
};

dots.forEach((dot, i) => {
    dot.onclick = function() {
        sliders[currentSlide].classList.remove('slider__item_active');
        currentSlide = i;
        sliders[currentSlide].classList.add('slider__item_active');
        clearDotsIndicators();
        setDotIndicator(currentSlide);
    }
});