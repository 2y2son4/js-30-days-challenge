'use strict';

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const inputSearch = document.querySelector('.search');
const resultSearch = document.querySelector('.suggestions');
const form = document.querySelector('.search-form');

fetch(endpoint)
  .then((data) => data.json())
  .then((data) => cities.push(...data));

function findMatches(search, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(search, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const paintResults = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      function population(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      //   console.log(place);
      //
      function icon(number) {
        if (number > 1000000) {
          return '<i class="fas fa-city"></i><i class="fas fa-city"></i><i class="fas fa-city"></i>';
        } else if (number > 500000) {
          return '<i class="fas fa-city"></i><i class="fas fa-city"></i>';
        } else if (number > 200000) {
          return '<i class="fas fa-city"></i>';
        } else {
          return '<i class="fas fa-home"></i>';
        }
      }
      return `
      <li>
      <span class="name">  ${cityName}, ${stateName} ${icon(place.population)}</span>
      <span class="population"><i class="fas fa-universal-access"></i> ${population(place.population)}</span>
      <span class="population"><a 
      href="https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}"
      target="_blank" title="Show ${place.city}'s location on a map"
      class="links">
      <i class="links-border fas fa-map-marked-alt"></i>
      ${place.latitude}, ${place.longitude}
      </a></span>
      </li>
      `;
    })
    .join('');

  resultSearch.innerHTML = paintResults;
}

function handleForm(ev) {
  ev.preventDefault();
}

inputSearch.addEventListener('keyup', displayMatches);
form.addEventListener('submit', handleForm);
