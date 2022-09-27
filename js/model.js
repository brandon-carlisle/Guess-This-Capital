import { getJSON } from './helpers';

export const state = {
  currentCountry: {
    name: '',
    capitalCity: '',
  },
};

const peru = await getJSON('https://restcountries.com/v3.1/name/peru');

console.log(peru.name.common);
console.log(peru.capital[0]);
