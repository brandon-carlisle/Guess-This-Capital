import { getJSON } from './helpers';

export const state = {
  currentCountry: {
    name: '',
    capitalCity: '',
  },
};

const peru = await getJSON('https://restcountries.com/v3.1/name/peru');
