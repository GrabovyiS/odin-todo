import DialogTodoComponent from './DialogTodoComponent';
import renderer from '../../renderer';
import app from '../../app';
import Todo from '../../todo';

class DialogCreateTodoComponent extends DialogTodoComponent {
  constructor(projectId) {
    super();
    super.changeTitle('New Todo');

    const createButton = document.createElement('button');
    createButton.classList.add('dialog-create-button');
    createButton.textContent = 'Create Todo';
    this.appendChild(createButton);

    createButton.addEventListener('click', () => {
      const project = app.projects.find((item) => item.id === projectId);

      const newTodoTitle = this.querySelector('input#title').value;
      const newTodoDueDate = this.querySelector('input#dueDate').value;
      const newTodoPriority = this.querySelector('select#priority').value;
      const newTodoDescription = this.querySelector(
        'textarea#description'
      ).value;

      const newTodo = new Todo(
        newTodoTitle,
        newTodoDescription,
        newTodoDueDate,
        newTodoPriority
      );
      project.createTodo(newTodo);

      renderer.renderProjects();
      this.close();
    });
  }
}

export default DialogCreateTodoComponent;
