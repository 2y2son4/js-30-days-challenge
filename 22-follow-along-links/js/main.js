'use strict';

const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlighLink() {
  const linkCoords = this.getBoundingClientRect();
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
}

triggers.forEach((a) => a.addEventListener('mouseenter', highlighLink));
