const tabsFirst = document.getElementById('tabs1');
const tabsElements = Array.from(tabsFirst.querySelectorAll('.tab__navigation > .tab'));
const tabsContext = Array.from(tabsFirst.querySelectorAll('.tab__content'));

for (tab of tabsElements) {
    tab.addEventListener('click', function() {
        const tabIndex = tabsElements.indexOf(this);

        tabsElements.forEach(tab => tab.classList.remove('tab_active'));
        this.classList.add('tab_active');

        tabsContext.forEach(tabContext => tabContext.classList.remove('tab__content_active'));
        tabsContext[tabIndex].classList.add('tab__content_active');

    })
}