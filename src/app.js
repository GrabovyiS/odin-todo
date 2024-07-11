import Project from './data/project';
import Todo from './data/todo';

class App {
  projects = [];

  constructor() {
    if (!localStorage.getItem('projects')) {
      this.populateStorage();

      this.createProject('Default project');

      this.projects[0].createTodo(
        new Todo('default title', 'default desc', '1111-11-11', 'medium')
      );
      this.projects[0].createTodo(
        new Todo('default 3', 'default desc 2', '2222-11-22', 'important')
      );

      this.projects[0].todos[2].do();
    } else {
      this.retrieveFromStorage();
    }
  }

  createProject(name) {
    const project = new Project(name);
    const placeholderTodo = new Todo(
      'Default todo',
      'Default desc',
      '2222-11-11',
      'light'
    );
    project.createTodo(placeholderTodo);
    this.projects.push(project);
    this.populateStorage();
  }

  deleteProject(projectId) {
    const index = this.projects.findIndex((item) => item.id === projectId);
    this.projects.splice(index, 1);
    this.populateStorage();
  }

  retrieveProject(project) {
    const retrievingProject = new Project(project.name);
    retrievingProject.id = project.id;

    for (const todo of project.todos) {
      const retrievingTodo = new Todo(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority
      );
      retrievingTodo.id = todo.id;
      if (todo.done) {
        retrievingTodo.done = true;
      }

      retrievingProject.createTodo(retrievingTodo);
    }

    this.projects.push(retrievingProject);
  }

  populateStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  retrieveFromStorage() {
    this.projects = [];
    const localProjects = JSON.parse(localStorage.getItem('projects'));

    for (const project in localProjects) {
      this.retrieveProject(localProjects[project]);
    }
  }
}

const app = new App();

export default app;
