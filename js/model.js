import { getJSON } from './helpers';

export const state = {
  currentCountry: {
    name: '',
    capitalCity: '',
  },
};

const getPeru = async function () {
  const peru = await getJSON('https://restcountries.com/v3.1/all');
  console.log(peru);
};

getPeru();
