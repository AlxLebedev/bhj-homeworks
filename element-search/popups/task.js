const firstPopup = document.getElementById('modal_main');
const secondPopup = document.getElementById("modal_success");
const closeButtons = document.getElementsByClassName("modal__close");
const succesButtons = document.getElementsByClassName("show-success");

const delay = setTimeout(() => {
    firstPopup.classList.add('modal_active');
}, 1000);
    
for (buttons of closeButtons) {
    buttons.addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove("modal_active");
    });
}
   
for (buttons of succesButtons) {
    buttons.addEventListener("click", function () {
        secondPopup.classList.add("modal_active");
    });
}