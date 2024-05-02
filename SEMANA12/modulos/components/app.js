// app.js
import TaskList from './components/taskList.js';

const tasks = [
  { id: 1, title: 'Fazer compras', completed: false },
  { id: 2, title: 'Estudar JavaScript', completed: true },
  { id: 3, title: 'Fazer exercícios físicos', completed: false }
];

document.getElementById('app').innerHTML = TaskList(tasks);
