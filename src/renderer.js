import app from './app';
import ProjectComponent from './components/ProjectComponent';

class Renderer {
  renderProjects() {
    const container = document.querySelector('#content');
    container.textContent = '';

    for (const project of app.projects) {
      const projectComponent = new ProjectComponent(project);
      projectComponent.projectId = project.id;

      container.appendChild(projectComponent);
    }
  }
}

const renderer = new Renderer();

export default renderer;
