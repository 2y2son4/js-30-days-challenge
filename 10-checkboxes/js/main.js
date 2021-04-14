'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(ev) {
  // checked if the shift key is down
  // AND check that is being checked something
  let inBetween = false;
  if (ev.shiftKey && this.checked) {
    // loop every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Check where the check starts and ends');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
