'use strict';

const formElement = document.querySelector('.form');
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

const taskParagraph = document.querySelectorAll('.task');

const inputsTextConfig = [
  {
    inputClass: '.add1',
    taskClass: '.task1',
    defaultValue: 'Tarea 1',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add2',
    taskClass: '.task2',
    defaultValue: 'Tarea 2',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add3',
    taskClass: '.task3',
    defaultValue: 'Tarea 3',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add4',
    taskClass: '.task4',
    defaultValue: 'Tarea 4',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add5',
    taskClass: '.task5',
    defaultValue: 'Tarea 5',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add6',
    taskClass: '.task6',
    defaultValue: 'Tarea 6',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add7',
    taskClass: '.task7',
    defaultValue: 'Tarea 7',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add8',
    taskClass: '.task8',
    defaultValue: 'Tarea 8',
    taskElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.add9',
    taskClass: '.task9',
    defaultValue: 'Tarea 9',
    taskElementAttribute: 'innerHTML',
  },
];

function getTask() {
  return {
    add1: document.querySelector('.add1').value,
    add2: document.querySelector('.add2').value,
    add3: document.querySelector('.add3').value,
    add4: document.querySelector('.add4').value,
    add5: document.querySelector('.add5').value,
    add6: document.querySelector('.add6').value,
    add7: document.querySelector('.add7').value,
    add8: document.querySelector('.add8').value,
    add9: document.querySelector('.add9').value,
  };
}

function getParagraph() {
  return {
    task1: document.querySelector('.task1').innerHTML,
    task2: document.querySelector('.task2').innerHTML,
    task3: document.querySelector('.task3').innerHTML,
    task4: document.querySelector('.task4').innerHTML,
    task5: document.querySelector('.task5').innerHTML,
    task6: document.querySelector('.task6').innerHTML,
    task7: document.querySelector('.task7').innerHTML,
    task8: document.querySelector('.task8').innerHTML,
    task9: document.querySelector('.task9').innerHTML,
  };
}

function updateAllInputs() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const taskElement = document.querySelector(inputTextConfig.taskClass);

    let newValue = inputElement.value;

    if (inputTextConfig.taskElementAttribute === 'innerHTML') {
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      taskElement.innerHTML = newValue;
    }
  }
}

let lastChecked;

function handleCheck(ev) {
  // checked if the shift key is down
  // AND check that is being checked something
  let inBetween = false;
  if (ev.shiftKey && this.checked) {
    // loop every single checkbox
    checkboxes.forEach((checkbox) => {
      //   console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        // console.log('Check where the check starts and ends');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));

const textInputs = document.querySelectorAll('.add');
for (const textInput of textInputs) {
  textInput.addEventListener('keyup', updateAllInputs);
}

function preventSubmit(ev) {
  ev.preventDefault();
}
formElement.addEventListener('submit', preventSubmit);

updateAllInputs();
