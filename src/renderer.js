import eventListeners from './eventListeners';

class Renderer {
  renderProjects(app) {
    const container = document.querySelector('#content');
    container.textContent = '';

    for (const project of app.projects) {
      const projectComponent = this.createProjectComponent(project);
      projectComponent.projectId = project.id;

      container.appendChild(projectComponent);
    }
  }

  createProjectComponent(project) {
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
        todoComponent = this.createPendingTodoComponent(todo);
        todosContainer.appendChild(todoComponent);
      } else {
        todoComponent = this.createDoneTodoComponent(todo);
        doneTodosContainer.appendChild(todoComponent);
      }
    }

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(todosContainer);
    projectContainer.appendChild(doneTodosHeading);
    projectContainer.appendChild(doneTodosContainer);

    return projectContainer;
  }

  createPendingTodoComponent(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;

    const todoDoneButton = document.createElement('button');
    todoDoneButton.classList.add('done-button');
    todoDoneButton.textContent = 'Done';

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('delete-button');
    todoDeleteButton.textContent = 'Delete';

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDate);
    todoContainer.appendChild(todoDoneButton);
    todoContainer.appendChild(todoDeleteButton);
    todoContainer.todoId = todo.id;

    eventListeners.setUpPendingTodo(todoContainer);
    return todoContainer;
  }

  createDoneTodoComponent(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo', 'done');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement('p');
    todoDate.textContent = todo.dueDate;

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

    eventListeners.setUpDoneTodo(todoContainer);
    return todoContainer;
  }
}

const renderer = new Renderer();

export default renderer;
