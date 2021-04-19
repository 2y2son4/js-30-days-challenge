'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
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
  let list = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>`;
    })
    .join('');
  platesList.innerHTML = list;
}

addItems.addEventListener('submit', addItem);

populateList(items, itemsList);
