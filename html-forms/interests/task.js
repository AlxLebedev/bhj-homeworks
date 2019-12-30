const allButtons = document.querySelectorAll('.interest__check');
const mainCheckButtons = Array.from(document.querySelectorAll('div.interests_main > ul > li.interest > label > input.interest__check'));

allButtons.forEach(element => {
    element.checked = false;
})

for (mainCheckButton of mainCheckButtons) {
    mainCheckButton.addEventListener('change', function() {

        const subButtons = Array.from(this.parentElement.parentElement.querySelectorAll('ul.interests_active > li.interest > label > input.interest__check'));

        if (this.checked) {
            subButtons.forEach(element => {
                element.checked = true;
            });
        } else {
            subButtons.forEach(element => {
                element.checked = false;
            });
        }
    });
};