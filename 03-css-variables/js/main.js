'use strict';

const inputs = document.querySelectorAll('.controls input');

const btn = document.querySelector('.reset');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  //   console.log(this.value);
  //     console.log(suffix);
  //   console.log(this.name);
  //   console.log(inputs);

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));

function handleReset() {
  location.reload();
}

btn.addEventListener('click', handleReset);
