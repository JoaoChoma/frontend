const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="toggleTaskCompletion(this)">Concluir</button>
            <button onclick="editTask(this)">Editar</button>
            <button onclick="deleteTask(this)">Excluir</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function toggleTaskCompletion(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span').innerText;
    const newText = prompt('Editar tarefa:', taskText);
    if (newText !== null && newText.trim() !== '') {
        taskItem.querySelector('span').innerText = newText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
