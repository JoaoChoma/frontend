// task.js
export default function Task({ id, title, completed }) {
    return `
      <div class="task">
        <input type="checkbox" id="task-${id}" ${completed ? 'checked' : ''}>
        <label for="task-${id}">${title}</label>
      </div>
    `;
  }
  