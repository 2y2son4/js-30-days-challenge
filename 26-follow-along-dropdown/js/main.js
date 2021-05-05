'use strict';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(
    () =>
      // with an arrow function the value of this is inherit from the parent, it doesn't happen with normal fuctions
      this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-entered-active');
  background.classList.remove('open');
}

triggers.forEach((trigger) => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach((trigger) => trigger.addEventListener('mouseleave', handleLeave));
