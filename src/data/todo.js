class Todo {
  static #idCounter = 0;
  done = false;

  constructor(title, description, dueDate, priority) {
    this.id = Todo.#idCounter;
    Todo.#idCounter++;

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  edit(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // Data in storage updated inside project.js on todo edit
  }

  do() {
    this.done = true;
    this.populateStorage();
  }

  undo() {
    this.done = false;
    this.populateStorage();
  }

  populateStorage() {
    const storage = JSON.parse(localStorage.getItem('projects'));
    console.log(storage);

    const currentProjectIndex = storage.findIndex((project) =>
      project.todos.find((todo) => todo.id === this.id)
    );

    const currentTodoIndex = storage[currentProjectIndex].todos.findIndex(
      (todo) => this.id === todo.id
    );

    storage[currentProjectIndex].todos[currentTodoIndex] = this;
    localStorage.setItem('projects', JSON.stringify(storage));
  }
}

export default Todo;
