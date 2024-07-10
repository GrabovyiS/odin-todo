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

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos.splice(index, 1);
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex(todo);
    this.todos[index].edit(title, description, dueDate, priority);
  }
}

export default Project;
