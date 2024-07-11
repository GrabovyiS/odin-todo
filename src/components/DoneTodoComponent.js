import renderer from '../renderer';
import app from '../app';
import DialogEditTodoComponent from './dialogs/DialogEditTodoComponent';

import priorityOptions from '../helpers/selectPriorityOptions';

class DoneTodoComponent {
  constructor(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo', 'done');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;
    const priorityColor = priorityOptions.find(
      (option) => option.value === todo.priority
    ).color;
    todoDate.style.color = priorityColor;

    const todoDoneButton = document.createElement('button');
    todoDoneButton.classList.add('done-button');
    todoDoneButton.textContent = 'Undo';

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('delete-button');
    todoDeleteButton.textContent = 'Delete';

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDate);
    todoContainer.appendChild(todoDoneButton);
    todoContainer.appendChild(todoDeleteButton);
    todoContainer.todoId = todo.id;

    this.setUpEventListeners(todoContainer);
    return todoContainer;
  }

  setUpEventListeners(todoContainer) {
    const todoTitle = todoContainer.querySelector('h3');
    todoTitle.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = e.target.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      const dialogEdit = new DialogEditTodoComponent(todo, projectId);
      dialogEdit.showModal();
    });

    const undoButton = todoContainer.querySelector('.done-button');
    undoButton.addEventListener('click', (e) => {
      const undoButton = e.target;

      const projectId = undoButton.closest('.project').projectId;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = undoButton.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      todo.done = false;
      renderer.renderProjects(app);
    });

    const deleteButton = todoContainer.querySelector('.delete-button');
    deleteButton.addEventListener('click', (e) => {
      const deleteButton = e.target;

      const projectId = deleteButton.closest('.project').projectId;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = deleteButton.closest('.todo').todoId;

      project.deleteTodo(todoId);
      renderer.renderProjects(app);
    });
  }
}

export default DoneTodoComponent;
