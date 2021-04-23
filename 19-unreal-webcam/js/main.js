const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const tip = document.querySelector('.tip');

const alphaNumber = document.querySelector('.alphaContainer input');

let redEffectBoolean = false;
let greenEffectBoolean = false;
let blueEffectBoolean = false;
let rgbSplitBoolean = false;

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`Oh, NOOOOOOOOOO: ${err}`);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them

    // red Effect
    if (redEffectBoolean) {
      pixels = redEffect(pixels);
    }

    // green Effect
    if (greenEffectBoolean) {
      pixels = greenEffect(pixels);
    }

    // blue Effect
    if (blueEffectBoolean) {
      pixels = blueEffect(pixels);
    }

    // on drugs effect
    if (rgbSplitBoolean) {
      pixels = rgbSplit(pixels);
    }
    ctx.globalAlpha = alphaNumber.value;

    pixels = greenScreen(pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'sexy');
  link.innerHTML = `<img src="${data}" alt="Sexy person" />`;
  strip.insertBefore(link, strip.firstChild);
  tip.innerHTML = '<i class="fas fa-long-arrow-alt-left"></i> Click on picture to <i class="far fa-save"></i>';
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function greenEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] - 50; // Red
    pixels.data[i + 1] = pixels.data[i + 1] + 100; // Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.2; // Blue
  }
  return pixels;
}

function blueEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] * 0.5; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 150; // Green
    pixels.data[i + 2] = pixels.data[i + 2] + 50; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 500] = pixels.data[i + 1]; // green
    pixels.data[i - 550] = pixels.data[i + 2]; // blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
