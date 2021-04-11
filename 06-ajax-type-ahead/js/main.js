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
        if (number < 30000) {
          return (icon = '🏡');
        } else {
          return (icon = '🏙️');
        }
      }
      return `
      <li>
      <span class="name"> ${icon(place.population)} ${cityName}, ${stateName}</span>
      <span class="name"> ${population(place.population)} 👩‍🦲</span>
      <span class="population"> ${place.latitude},</span>
      <span class="population"> ${place.longitude}</span>
      </li>
      `;
    })
    .join('');

  resultSearch.innerHTML = paintResults;
}

inputSearch.addEventListener('change', displayMatches);
inputSearch.addEventListener('keyup', displayMatches);
