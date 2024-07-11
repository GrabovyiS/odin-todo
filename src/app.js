import Project from './data/project';
import Todo from './data/todo';

class App {
  projects = [];

  constructor() {
    this.addProject('Default project');
    this.projects[0].createTodo(
      new Todo('default title', 'default desc', '1111-11-11', 'medium')
    );
    this.projects[0].createTodo(
      new Todo('default 3', 'default desc 2', '2222-11-22', 'light')
    );
    this.projects[0].todos[2].done = true;
  }

  addProject(name) {
    const project = new Project(name);
    const placeholderTodo = new Todo(
      'Default todo',
      'Default desc',
      '2222-11-11',
      'light'
    );
    project.createTodo(placeholderTodo);
    this.projects.push(project);
  }

  deleteProject(projectId) {
    const index = this.projects.findIndex((item) => item.id === projectId);
    this.projects.splice(index, 1);
  }
}

// if no state in local storage
const app = new App();

export default app;
