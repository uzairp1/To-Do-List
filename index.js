document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.onclick = function() {
        const taskText = taskInput.value;
        if (taskText) {
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    };
    taskInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') addTaskBtn.click(); });

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = function() {
            const newTaskText = prompt('Edit your task:', taskText);
            if (newTaskText) {
                li.firstChild.textContent = newTaskText;
            }
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick =function() {
            taskList.removeChild(li);
        };

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        return li;
    }
    

});
