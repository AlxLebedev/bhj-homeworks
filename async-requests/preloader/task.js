const loader = document.getElementById('loader');
const itemsField = document.getElementById('items');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('valutesValue')) {
        itemsField.insertAdjacentHTML('beforeend', localStorage.getItem('valutesValue'));
    } else {
        console.log('not')
    }
})

window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            loader.classList.remove('loader_active');
            itemsField.innerHTML = '';

            const xhrResponse = JSON.parse(xhr.responseText).response["Valute"];
            
            for (key in xhrResponse) {
                const item = `<div class="item">
                                <div class="item__code">
                                ${xhrResponse[key].CharCode}
                                </div>
                                <div class="item__value">
                                ${xhrResponse[key].Value}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                            </div>`

                itemsField.insertAdjacentHTML('beforeend', item);
            }
            
            localStorage.setItem('valutesValue', itemsField.innerHTML);
        }
    }
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
}