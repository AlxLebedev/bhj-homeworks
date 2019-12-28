const book = document.getElementById('book');
const resizeButtons = Array.from(document.querySelectorAll('.font-size'));
const colorButtons = Array.from(document.querySelectorAll('.book__control_color > .color'));
const backgroundButtons = Array.from(document.querySelectorAll('.book__control_background > .color'));

for (resizeButton of resizeButtons) {
    resizeButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        resizeButtons.forEach(button => button.classList.remove('font-size_active'));
        this.classList.add('font-size_active');

        if (this.dataset.size == 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (this.dataset.size == 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }

    });
};

for (colorButton of colorButtons) {
    colorButton.addEventListener('click', function (event) {
        event.preventDefault();

        colorButtons.forEach(button => button.classList.remove('color_active'));
        this.classList.add('color_active');

        if (this.dataset.color == 'gray') {
            book.classList.remove('book_color-whitesmoke');
            book.classList.add('book_color-gray');
        } else if (this.dataset.color == 'whitesmoke') {
            book.classList.remove('book_color-gray');
            book.classList.add('book_color-whitesmoke');
        } else {
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        }
    });
};

for (backgroundButton of backgroundButtons) {
    backgroundButton.addEventListener('click', function (event) {
        event.preventDefault();

        backgroundButtons.forEach(button => button.classList.remove('color_active'));
        this.classList.add('color_active');

        if (this.dataset.color == 'black') {
            book.classList.remove('book_bg-gray');
            book.classList.add('book_bg-black');
        } else if (this.dataset.color == 'gray') {
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray');
        } else {
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-black');
        }
    })
}