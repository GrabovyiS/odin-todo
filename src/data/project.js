class Project {
  static #idCounter = 0;
  todos = [];
  constructor(name) {
    this.name = name;
    this.id = Project.#idCounter;
    Project.#idCounter++;
  }

  changeName(newName) {
    this.name = newName;
  }

  createTodo(todo) {
    this.todos.push(todo);
    this.sortTodos();
  }

  deleteTodo(id) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos.splice(index, 1);
    this.sortTodos();
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos[index].edit(title, description, dueDate, priority);
    this.sortTodos();
  }

  sortTodos() {
    this.todos.sort((todo1, todo2) => {
      if (
        (todo1.priority === 'important' &&
          (todo2.priority === 'medium' || todo2.priority === 'light')) ||
        (todo1.priority === 'medium' && todo2.priority === 'light')
      ) {
        return -1;
      } else if (todo1.priority === todo2.priority) {
        return 0;
      } else {
        return 1;
      }
    });
  }
}

export default Project;
