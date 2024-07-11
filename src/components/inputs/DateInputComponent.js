import InputComponent from './InputComponent';

class DateInputComponent extends InputComponent {
  constructor(label, name) {
    super(label, name);
    this.querySelector('input').type = 'date';
  }
}

export default DateInputComponent;
