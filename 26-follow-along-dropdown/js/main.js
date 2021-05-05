'use strict';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const navElement = document.querySelector('.top');

function handleEnter() {
  console.log('enter');
}

function handleLeave() {
  console.log('leave');
}

triggers.forEach((trigger) => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach((trigger) => trigger.addEventListener('mouseleave', handleLeave));
