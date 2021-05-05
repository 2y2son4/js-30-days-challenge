'use strict';

const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(ev) {
  console.log(this.classList.value);

  // stop bubbling
  ev.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    cature: false,
    // it listen to a click once and the stops
    once: true,
  })
);

button.addEventListener(
  'click',
  () => {
    console.log('CLICK, MF!');
  },
  {
    // this unbind the event and stops it from happening more than once
    once: true,
  }
);
