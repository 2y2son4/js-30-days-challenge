'use strict';
const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 },
];

function makeGreen() {
  const title = document.querySelector('.title');
  title.style.color = '#BADA55';
  title.style.fontSize = '50px';
}

// Regular
console.log('Regular:', 'Holi');

// Interpolated
console.log('Interpolated:', 'Holi, I am a %s string', '💩');

// Styled
console.log('Styled:', '%c I am some great text', 'font-size:20px; background:#fabada;');

// warning!
console.warn('Warning!:', 'Oh, not you again....');

// Error :|
console.error('Error :|:', 'Shit...');

// Info
console.info('Info:', 'FUN FACT: The %s eats 3-4 people per year', '🐊');

// Testing
const title = document.querySelector('.title');
console.assert(title.classList.contains('ouch'), 'Testing:', 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(title);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Aki');
console.count('No Aki');
console.count('Aki');
console.count('Aki');
console.count('No Aki');
console.count('Aki');
console.count('Aki');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/2y2son4')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.table(data);
  });
