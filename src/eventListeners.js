import app from './app';
import renderer from './renderer';

class EventListeners {
  setUpPendingTodo(todoComponent) {
    todoComponent.addEventListener('click', () => {});

    const doneButton = todoComponent.querySelector('.done-button');
    doneButton.addEventListener('click', (e) => {
      const doneButton = e.target;

      const projectId = doneButton.closest('.project').projectId;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = doneButton.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      todo.done = true;
      renderer.renderProjects(app);
    });

    const deleteButton = todoComponent.querySelector('.delete-button');
    deleteButton.addEventListener('click', (e) => {
      const deleteButton = e.target;

      const projectId = deleteButton.closest('.project').projectId;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = deleteButton.closest('.todo').todoId;

      project.deleteTodo(todoId);
      renderer.renderProjects(app);
    });
  }

  setUpDoneTodo(todoComponent) {
    todoComponent.addEventListener('click', () => {});

    const undoButton = todoComponent.querySelector('.done-button');
    undoButton.addEventListener('click', (e) => {
      const undoButton = e.target;

      const projectId = undoButton.closest('.project').projectId;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = undoButton.closest('.todo').todoId;
      const todo = project.todos.find((todo) => todo.id === todoId);

      todo.done = false;
      renderer.renderProjects(app);
    });

    const deleteButton = todoComponent.querySelector('.delete-button');
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

const eventListeners = new EventListeners();

export default eventListeners;
