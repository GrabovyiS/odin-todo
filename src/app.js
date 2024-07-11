import Project from './project';
import Todo from './todo';

class App {
  projects = [];

  constructor() {
    this.addProject('Default project');
    this.projects[0].createTodo(
      new Todo('default title', 'default desc', '11-11-11', 1)
    );
    this.projects[0].createTodo(
      new Todo('default 2', 'default desc 2', '22-11-22', 2)
    );
    this.projects[0].createTodo(
      new Todo('default 3', 'default desc 2', '22-11-22', 2)
    );
    this.projects[0].todos[2].done = true;
  }

  addProject(name) {
    const project = new Project(name);
    this.projects.push(project);
  }
}

// if no state in local storage
const app = new App();

export default app;
