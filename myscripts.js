
// Получение списка задач из Local Storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Функция для добавления задачи в список
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;
    if (taskText !== '') {
        tasks.push({
            text: taskText,
            completed: false
        });
        taskInput.value = '';
        renderTasks();
        saveTasks();
    }
}

// Функция для отображения задач в списке
function renderTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let listItem = document.createElement('li');
        listItem.textContent = task.text;
        if (task.completed) {
            listItem.classList.add('completed');
        }
        taskList.appendChild(listItem);
    }
}

// Функция для сохранения списка задач в Local Storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Функция для выделения каждого четного элемента
function highlightEven() {
    let taskList = document.getElementById('taskList');
    let listItems = taskList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if (i % 2 === 1) {
            listItems[i].classList.add('highlight-even');
        } else {
            listItems[i].classList.remove('highlight-even');
        }
    }
}

// Функция для выделения каждого нечетного элемента
function highlightOdd() {
    let taskList = document.getElementById('taskList');
    let listItems = taskList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if (i % 2 === 0) {
            listItems[i].classList.add('highlight-odd');
        } else {
            listItems[i].classList.remove('highlight-odd');
        }
    }
}

// Функция для удаления последнего элемента
function removeLast() {
    tasks.pop();
    renderTasks();
    saveTasks();
}

// Функция для удаления первого элемента
function removeFirst() {
    tasks.shift();
    renderTasks();
    saveTasks();
}

// Функция для пометки задачи как завершенной
function completeTask() {
    let taskList = document.getElementById('taskList');
    let listItems = taskList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if (!listItems[i].classList.contains('completed')) {
            listItems[i].classList.add('completed');
            let completedTask = tasks.splice(i, 1)[0];
            tasks.push(completedTask);
            break;
        }
    }
    renderTasks();
    saveTasks();
}

// Отображение задач при загрузке страницы
renderTasks();