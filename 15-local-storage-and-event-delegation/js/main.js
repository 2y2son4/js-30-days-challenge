'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// retrieve from LS || create an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(ev) {
  ev.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };

  // add new item to items array
  items.push(item);
  populateList(items, itemsList);

  // save in LS
  localStorage.setItem('items', JSON.stringify(items));

  this.reset();
}

// isolate function to add plates to list
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>`;
    })
    .join('');
}

// event delegation function
function toggleState(ev) {
  // event delegation
  if (!ev.target.matches('input')) return; //skip this unless it's an input
  const element = ev.target;
  const index = element.dataset.index;

  // toggle state
  items[index].done = !items[index].done;

  // store in LS
  JSON.parse(localStorage.getItem('items'));

  // re-paint list
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleState);

populateList(items, itemsList);
