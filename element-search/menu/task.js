const mainMenu = Array.from(document.querySelectorAll('ul.menu_main > li > a'));
const subMenu = Array.from(document.querySelectorAll('.menu_sub'));

for (mainMenuItem of mainMenu) {

    mainMenuItem.onclick = function() {

        if (this.nextElementSibling.classList.contains('menu_sub')) {

            if (this.nextElementSibling.classList.contains('menu_active')) {
                this.nextElementSibling.classList.remove('menu_active');
            } else {
                
                for (subMenuItem of subMenu) {
                    if (subMenuItem.classList.contains('menu_active')) {
                        subMenuItem.classList.remove('menu_active');
                    }
                }

                this.nextElementSibling.classList.add('menu_active');
            }
            
        return false;
        }
    };
}