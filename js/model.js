import { getJSON } from './helpers';
import { API_URL } from './config';
import { GAME_TIME_SEC } from './config';

//prettier-ignore
const countryCodes = ["ALB","AND","AUT","BLR","BEL","BIH","BGR","HRV","CYP","CZE","DNK","EST","FRO","FIN","FRA","DEU","GIB","GRC","HUN","ISL","IRL","IMN","ITA","XKX","LVA","LIE","LTU","LUX","MKD","MLT","MDA","MCO","MNE","NLD","NOR","POL","PRT","ROU","RUS","SMR","SRB","SVK","SVN","ESP","SWE","CHE","UKR","GBR","VAT","RSB",];

export const state = {
  currentCountry: {},
  currentScore: 0,
  scores: [],
  gameTime: GAME_TIME_SEC,
};

const getRandomIndex = function () {
  return Math.floor(Math.random() * countryCodes.length);
};

export const createCurrentCountryObject = function (data) {
  return {
    name: data.name,
    capitalCity: data.capital,
    code: data.alpha3Code,
    flag: data.flags.svg,
  };
};

export const loadCountry = async function () {
  try {
    const index = getRandomIndex();
    const code = countryCodes[index];
    const country = await getJSON(`${API_URL}${code}`);

    if (!country.capital) loadCountry(); // Quick fix incase there is no capital city

    state.currentCountry = createCurrentCountryObject(country);
  } catch (error) {
    console.error(error);
  }
};

const formatAnswers = function (string) {
  return string.toLowerCase().replaceAll(' ', '');
};

export const checkAnswer = function (answer) {
  const correctAnswer = formatAnswers(state.currentCountry.capitalCity);
  const submittedAnswer = formatAnswers(answer.answer);
  if (submittedAnswer === correctAnswer) return true;
  else return false;
};

export const addCurrentScore = function () {
  state.currentScore++;
};

export const removeCurrentScore = function () {
  state.currentScore = 0;
};
