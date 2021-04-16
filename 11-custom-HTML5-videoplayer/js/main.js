'use strict';
// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  //   if (video.pause) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  //   console.log(icon);
}

function skip() {
  //   console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  //   console.log(this.value);
  //   console.log(this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  console.log(percent);
}

// Hook event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress); // also there's a 'progress' event

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));
