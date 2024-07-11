import DialogTodoComponent from './DialogTodoComponent';
import renderer from '../../renderer';
import app from '../../app';

class DialogEditTodoComponent extends DialogTodoComponent {
  constructor(todo, projectId) {
    super();
    super.changeTitle(todo.title);

    const titleInput = this.querySelector('input#title');
    const dueDateInput = this.querySelector('input#dueDate');
    const priorityInput = this.querySelector('select#priority');
    const descriptionInput = this.querySelector('textarea#description');

    titleInput.value = todo.title;
    dueDateInput.value = todo.dueDate;
    priorityInput.value = todo.priority;
    descriptionInput.value = todo.description;

    const doneButton = document.createElement('button');
    doneButton.id = 'done-dialog-button';
    doneButton.textContent = 'Done';
    this.appendChild(doneButton);

    doneButton.addEventListener('click', () => {
      const project = app.projects.find((item) => item.id === projectId);

      const newTodoTitle = titleInput.value;
      const newTodoDueDate = dueDateInput.value;
      const newTodoPriority = priorityInput.value;
      const newTodoDescription = descriptionInput.value;

      project.editTodo(
        todo.id,
        newTodoTitle,
        newTodoDescription,
        newTodoDueDate,
        newTodoPriority
      );

      renderer.renderProjects();
      this.close();
    });
  }
}

export default DialogEditTodoComponent;
