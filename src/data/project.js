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
    this.onDataChange();
  }

  createTodo(todo) {
    this.todos.push(todo);
    this.onDataChange();
  }

  deleteTodo(id) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos.splice(index, 1);
    this.onDataChange();
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find((todo) => id === todo.id);
    const index = this.todos.findIndex((item) => item === todo);
    this.todos[index].edit(title, description, dueDate, priority);
    this.onDataChange();
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

  populateStorage() {
    const storage = JSON.parse(localStorage.getItem('projects'));
    const currentProjectIndex = storage.findIndex(
      (project) => project.id === this.id
    );

    storage[currentProjectIndex] = this;
    localStorage.setItem('projects', JSON.stringify(storage));
  }

  onDataChange() {
    this.sortTodos();
    this.populateStorage();
  }
}

export default Project;
