import PendingTodoComponent from './pendingTodoComponent';
import DoneTodoComponent from './DoneTodoComponent';

class ProjectComponent {
  constructor(project) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos');

    const doneTodosHeading = document.createElement('h2');
    doneTodosHeading.classList.add('completed-heading');
    doneTodosHeading.textContent = 'Completed';

    const doneTodosContainer = document.createElement('div');
    doneTodosContainer.classList.add('done-todos');

    for (const todo of project.todos) {
      let todoComponent;
      if (!todo.done) {
        todoComponent = new PendingTodoComponent(todo);
        todosContainer.appendChild(todoComponent);
      } else {
        todoComponent = new DoneTodoComponent(todo);
        doneTodosContainer.appendChild(todoComponent);
      }
    }

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(todosContainer);
    projectContainer.appendChild(doneTodosHeading);
    projectContainer.appendChild(doneTodosContainer);

    return projectContainer;
  }
}

export default ProjectComponent;
