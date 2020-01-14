const reveals = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function() {
    reveals.forEach(revealElement => {
        if (window.innerHeight > revealElement.getBoundingClientRect().top && revealElement.getBoundingClientRect().bottom > 0) {
            revealElement.classList.add('reveal_active');
        } else {
            revealElement.classList.remove('reveal_active');
        }
    });
});