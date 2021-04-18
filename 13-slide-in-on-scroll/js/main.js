'use strict';

// debounce scroll function
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide(ev) {
  //   console.count(ev);
  images.forEach((image) => {
    // half-way through the image
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    console.log(slideInAt);
    // bottom of the image
    const imageBottom = image.offsetTop + image.height;

    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrollPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
