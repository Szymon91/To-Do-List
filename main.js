const divDate = document.querySelector('#date');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDay = currentDate.getDate();
divDate.textContent = `${currentDay} ${months[currentMonth]} ${currentYear}`;

const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index,1);
    renderList()
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usuń</button>";
    toDoList.push(task);
    renderList()
    ul.appendChild(task);
    input.value = '';
    task.querySelector('button').addEventListener('click', removeTask)
}

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, index) => {
        toDoElement.dataset.key = index;
        ul.appendChild(toDoElement)
    })
}

form.addEventListener('submit', addTask);