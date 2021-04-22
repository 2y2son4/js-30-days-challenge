'use strict';

// convert the node list of times into an array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const total = document.querySelector('.total-time');

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(
  `The total time you'll need to watch the videos is ${hours} hours, ${mins} minutes and ${secondsLeft} seconds`
);

total.innerHTML = `The total time you'll need to watch the videos is <span class="bold" >${hours} hours, ${mins} minutes and ${secondsLeft} seconds </span>`;
