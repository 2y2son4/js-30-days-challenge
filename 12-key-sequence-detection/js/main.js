'use strict';

const pressedKeys = [];
const secretCode = 'aconcawa';
window.addEventListener('keyup', (ev) => {
  pressedKeys.push(ev.key);
  pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);

  if (pressedKeys.join('').includes(secretCode)) {
    console.log("DING, DING. We've got a winner");
    cornify_add();
  }
  console.log(pressedKeys);
});
