'use strict';

const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 50; // px

function shadow(ev) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = ev;

  // this = the thing you are listening to
  if (this !== ev.target) {
    x = x + ev.target.offsetLeft;
    y = y + ev.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #8FD129,
    ${xWalk * -1}px ${yWalk}px 0 #5A7038,
    ${yWalk}px ${xWalk * -1}px 0 #80BD26,
    ${yWalk * -1}px ${xWalk}px 0 #C2F279   
  `;
}

hero.addEventListener('mousemove', shadow);
