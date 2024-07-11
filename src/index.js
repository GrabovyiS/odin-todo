import './styles.css';

import app from './app';
import renderer from './renderer';
import Project from './data/project';
import Todo from './data/todo';

const createProjectInput = document.querySelector('#create-project-input');
const createProjectButton = document.querySelector('#create-project-button');

createProjectButton.addEventListener('click', () => {
  app.addProject(createProjectInput.value);
  renderer.renderProjects();
});

renderer.renderProjects();
