'use strict';

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map((voice) => `<option value="${voice.name}"> ${voice.name} (${voice.lang})</option>`)
    .join('');
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
