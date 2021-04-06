'use strict';

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  // SECONDS
  const seconds = now.getSeconds(); // seconds of the current minute
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // MINUTES
  const mins = now.getMinutes(); // minutes of the current minute
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  // HOURS
  const hour = now.getHours(); // hour of the current minute
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (secondsDegrees === 90) {
    allHands.forEach((hand) => (hand.style.transition = 'none'));
  } else {
    allHands.forEach((hand) => (hand.style.transition = ''));
  }
}

setInterval(setDate, 1000);

setDate();
