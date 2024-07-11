import './styles.css';

import app from './app';
import renderer from './renderer';

const createProjectInput = document.querySelector('#create-project-input');
const createProjectButton = document.querySelector('#create-project-button');

createProjectButton.addEventListener('click', () => {
  app.addProject(createProjectInput.value);
  renderer.renderProjects();
});

renderer.renderProjects();
