import decodeHtmlCharCodes from '../../helpers/decode';
import priorityOptions from '../../helpers/selectPriorityOptions';

import InputComponent from '../inputs/InputComponent';
import DateInputComponent from '../inputs/DateInputComponent';
import SelectComponent from '../inputs/SelectComponent';
import TextAreaComponent from '../inputs/TextAreaComponent';

class DialogTodoComponent {
  constructor() {
    const dialogContainer = document.querySelector('#dialog');
    dialogContainer.textContent = '';

    const header = document.createElement('header');

    const heading = document.createElement('h2');
    const closeButton = document.createElement('button');
    closeButton.textContent = decodeHtmlCharCodes('&#10006;');
    closeButton.id = 'dialog-close-button';

    header.appendChild(heading);
    header.appendChild(closeButton);

    const inputsContainer = document.createElement('div');
    inputsContainer.classList.add('inputs');

    const titleInput = new InputComponent('Title:', 'title');
    const dueDateInput = new DateInputComponent('Due date:', 'dueDate');
    const priorityInput = new SelectComponent(
      'Priority:',
      'priority',
      priorityOptions
    );
    const descriptionInput = new TextAreaComponent(
      'Description:',
      'description'
    );

    inputsContainer.appendChild(titleInput);
    inputsContainer.appendChild(dueDateInput);
    inputsContainer.appendChild(priorityInput);
    inputsContainer.appendChild(descriptionInput);

    dialogContainer.appendChild(header);
    dialogContainer.appendChild(inputsContainer);

    this.setUpEventListeners(dialogContainer);
    return dialogContainer;
  }

  changeTitle(title) {
    this.querySelector('h2').textContent = title;
  }

  setUpEventListeners(dialogContainer) {
    const closeButton = dialogContainer.querySelector('#dialog-close-button');
    closeButton.addEventListener('click', () => {
      dialogContainer.close();
    });
  }
}

export default DialogTodoComponent;
