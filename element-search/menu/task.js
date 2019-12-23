let mainMenu = Array.from(document.querySelectorAll('ul.menu_main > li > a'));

for (mainMenuItem of mainMenu) {
    mainMenuItem.onclick = function() {

        //mainMenu.forEach(menuElement => menuElement.nextElementSibling.classList.remove('menu_active'));
        //этой строчкой я хотел у всех элементов удалить активное состояние, чтобы даже при нажатии на пункт меню, который
        //не содержит подменю, закрылось любое открытое меню и после этого состоялся переход по ссылке.
        //идея была в том, чтобы при каждом клике сперва закрывать меню, а потом уже открывать нужное или переходить по ссылке в пунктах без подменю.
        //но при таком исполнении страничка обновляется - код после строки 6 не доходит до условий и не выполняется return false
        //я рассчитывал на то, что строка 6 закроет любое активное подменю и далее состоится проверка в строке 13
        
        if (this.nextElementSibling.classList.contains('menu_sub')) {

            if (this.nextElementSibling.classList.contains('menu_active')) {
                this.nextElementSibling.classList.remove('menu_active');
            } else {
                this.nextElementSibling.classList.add('menu_active');
            }
            
            return false;
        }

        
    };
    //console.log('click added');
}