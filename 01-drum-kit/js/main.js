function playSound(e) {
  //   console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   console.log(audio);

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   console.log(key);

  if (!audio) return; //stop the function if there is no data-key in the script

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
  // listen on each key for when the transition event happen
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it is not transform
  //   console.log(e.propertyName);

  this.classList.remove('playing');
  //   console.log(this);
}

const keys = document.querySelectorAll('.key');
// console.log(keys);

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
