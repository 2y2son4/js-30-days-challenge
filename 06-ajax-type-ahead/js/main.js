'use strict';

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const inputSearch = document.querySelector('.search');
const resultSearch = document.querySelector('.suggestions');

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
        if (number < 50000) {
          return '<i class="fas fa-home"></i>';
        } else {
          return '<i class="fas fa-city"></i>';
        }
      }
      return `
      <li>
      <span class="name"> ${icon(place.population)} ${cityName}, ${stateName}</span>
      <span class="population"><i class="fas fa-universal-access"></i> ${population(place.population)}</span>
      <a 
      href="https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}"
      target="_blank"
      class="links">
      <i class="fas fa-map-marked-alt"></i>
      ${place.latitude}, ${place.longitude}
      </a>
      </li>
      `;
    })
    .join('');

  resultSearch.innerHTML = paintResults;
}

inputSearch.addEventListener('change', displayMatches);
inputSearch.addEventListener('keyup', displayMatches);
