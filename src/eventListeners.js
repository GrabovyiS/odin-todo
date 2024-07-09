import app from './app';
import renderer from './renderer';

class EventListeners {
  setUpPendingTodo(todoComponent) {
    todoComponent.addEventListener('click', () => {});

    const doneButton = todoComponent.querySelector('.done-button');
    doneButton.addEventListener('click', () => {
      const projectId = doneButton.closest('.project').id;
      const project = app.projects.find((project) => project.id === projectId);
      const todoId = doneButton.closest('.todo').id;
      const todo = project.todos.find((todo) => todo.id === todoId);
      todo.done = true;
      renderer.renderProjects(app);
    });
  }

  setUpDoneTodo(todoComponent) {}
}

const eventListeners = new EventListeners();

export default eventListeners;
