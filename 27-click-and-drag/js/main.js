'use strict';

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (ev) => {
  isDown = true;
  slider.classList.add('active');
  startX = ev.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (ev) => {
  if (!isDown) return; // stops the function from running
  ev.preventDefault();
  const x = ev.pageX - slider.offsetLeft;
  //   console.log({ x, startX });
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
