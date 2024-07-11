import PendingTodoComponent from './pendingTodoComponent';
import DoneTodoComponent from './DoneTodoComponent';
import DialogCreateTodoComponent from './dialogs/DialogCreateTodoComponent';
import app from '../app';
import renderer from '../renderer';

class ProjectComponent {
  constructor(project) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    const projectHeader = document.createElement('header');

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.classList.add('delete-button', 'delete-project-button');
    projectDeleteButton.textContent = 'Delete Project';

    const todoCreateButton = document.createElement('button');
    todoCreateButton.classList.add('create-button');
    todoCreateButton.textContent = 'New Todo';

    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectDeleteButton);
    projectHeader.appendChild(todoCreateButton);

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

    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(todosContainer);
    projectContainer.appendChild(doneTodosHeading);
    projectContainer.appendChild(doneTodosContainer);

    projectContainer.projectId = project.id;

    this.setUpEventListeners(projectContainer);
    return projectContainer;
  }

  setUpEventListeners(projectContainer) {
    const todoCreateButton = projectContainer.querySelector('.create-button');

    todoCreateButton.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      const dialog = new DialogCreateTodoComponent(projectId);
      dialog.showModal();
    });

    const projectDeleteButton = projectContainer.querySelector(
      '.delete-project-button'
    );

    projectDeleteButton.addEventListener('click', (e) => {
      const projectId = e.target.closest('.project').projectId;
      app.deleteProject(projectId);
      renderer.renderProjects();
    });
  }
}

export default ProjectComponent;
