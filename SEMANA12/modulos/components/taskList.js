// taskList.js
import Task from './task.js';

export default function TaskList(tasks) {
  const taskElements = tasks.map(task => Task(task)).join('');
  return `<div class="task-list">${taskElements}</div>`;
}
