'use strict';

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNava) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
