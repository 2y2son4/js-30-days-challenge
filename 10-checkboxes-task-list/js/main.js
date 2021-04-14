'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

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

// handle tasks preview
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
  saveInLocalStorage();
}

const textInputs = document.querySelectorAll('.add');
for (const textInput of textInputs) {
  textInput.addEventListener('keyup', updateAllInputs);
}

// handle checked and unchecked tasks
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

// prevent submit from form
// const formElement = document.querySelector('.form');
// function preventSubmit(ev) {
//   ev.preventDefault();
// }
// formElement.addEventListener('submit', preventSubmit);

// Local Storage

function getAllTasks() {
  return {
    task1: document.querySelector('.add1').value,
    task2: document.querySelector('.add2').value,
    task3: document.querySelector('.add3').value,
    task4: document.querySelector('.add4').value,
    task5: document.querySelector('.add5').value,
    task6: document.querySelector('.add6').value,
    task7: document.querySelector('.add7').value,
    task8: document.querySelector('.add8').value,
    task9: document.querySelector('.add9').value,
  };
}

function saveInLocalStorage() {
  const userTask = getAllTasks();
  const userTaskInString = JSON.stringify(userTask);
  localStorage.setItem('userTask', userTaskInString);
}

function getFromLocalStorage() {
  const userTaskInString = localStorage.getItem('userTaskInString');
  if (userTaskInString !== null) {
    const userTask = JSON.parse(userTaskInString);
    document.querySelector('.add1').value = userTask.task1;
    document.querySelector('.add2').value = userTask.task2;
    document.querySelector('.add3').value = userTask.task3;
    document.querySelector('.add4').value = userTask.task4;
    document.querySelector('.add5').value = userTask.task5;
    document.querySelector('.add6').value = userTask.task6;
    document.querySelector('.add7').value = userTask.task7;
    document.querySelector('.add8').value = userTask.task8;
    document.querySelector('.add9').value = userTask.task9;
  }

  updateAllInputs();
}
getFromLocalStorage();
// updateAllInputs();
