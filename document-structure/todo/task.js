const inputField = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

function addingTask(task) {
    let taskTemplate = `<div class="task">
    <div class="task__title">
    ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;

    taskList.insertAdjacentHTML('afterbegin', taskTemplate);

    inputField.value = '';

    const removeBtn = document.body.querySelector('div.task > a.task__remove');
    removeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.remove();
    })
};

inputField.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode == 13 && inputField.value != '') {
        inputField.value = inputField.value.trim();
        addingTask(inputField.value);
    }
});

addBtn.addEventListener('click', () => {
    event.preventDefault();
    if (inputField.value != '') {
        inputField.value = inputField.value.trim();
        addingTask(inputField.value);
    }
});