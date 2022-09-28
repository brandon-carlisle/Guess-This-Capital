import { getJSON } from './helpers';
import { API_URL } from './config';
import { GAME_TIME_SEC } from './config';

//prettier-ignore
const countryCodes = ["ALB","AND","AUT","BLR","BEL","BIH","BGR","HRV","CYP","CZE","DNK","EST","FRO","FIN","FRA","DEU","GIB","GRC","HUN","ISL","IRL","IMN","ITA","XKX","LVA","LIE","LTU","LUX","MKD","MLT","MDA","MCO","MNE","NLD","NOR","POL","PRT","ROU","RUS","SMR","SRB","SVK","SVN","ESP","SWE","CHE","UKR","GBR","VAT","RSB",];
// const countryCodes = ['AFG','ALA','ALB','DZA','ASM','AND','AGO','AIA','ATA','ATG','ARG','ARM','ABW','AUS','AUT','AZE','BHS','BHR','BGD','BRB','BLR','BEL','BLZ','BEN','BMU','BTN','BOL','BES','BIH','BWA','BVT','BRA','IOT','BRN','BGR','BFA','BDI','CPV','KHM','CMR','CAN','CYM','CAF','TCD','CHL','CHN','CXR','CCK','COL','COM','COG','COD','COK','CRI','CIV','HRV','CUB','CUW','CYP','CZE','DNK','DJI','DMA','DOM','ECU','EGY','SLV','GNQ','ERI','EST','SWZ','ETH','FLK','FRO','FJI','FIN','FRA','GUF','PYF','ATF','GAB','GMB','GEO','DEU','GHA','GIB','GRC','GRL','GRD','GLP','GUM','GTM','GGY','GIN','GNB','GUY','HTI','HMD','VAT','HND','HKG','HUN','ISL','IND','IDN','IRN','IRQ','IRL','IMN','ISR','ITA','JAM','JPN','JEY','JOR','KAZ','KEN','KIR','PRK','KOR','KWT','KGZ','LAO','LVA','LBN','LSO','LBR','LBY','LIE','LTU','LUX','MAC','MDG','MWI','MYS','MDV','MLI','MLT','MHL','MTQ','MRT','MUS','MYT','MEX','FSM','MDA','MCO','MNG','MNE','MSR','MAR','MOZ','MMR','NAM','NRU','NPL','NLD','NCL','NZL','NIC','NER','NGA','NIU','NFK','MKD','MNP','NOR','OMN','PAK','PLW','PSE','PAN','PNG','PRY','PER','PHL','PCN','POL','PRT','PRI','QAT','REU','ROU','RUS','RWA','BLM','SHN','KNA','LCA','MAF','SPM','VCT','WSM','SMR','STP','SAU','SEN','SRB','SYC','SLE','SGP','SXM','SVK','SVN','SLB','SOM','ZAF','SGS','SSD','ESP','LKA','SDN','SUR','SJM','SWE','CHE','SYR','TWN','TJK','TZA','THA','TLS','TGO','TKL','TON','TTO','TUN','TUR','TKM','TCA','TUV','UGA','UKR','ARE','GBR','USA','UMI','URY','UZB','VUT','VEN','VNM','VGB','VIR','WLF','ESH','YEM','ZMB','ZWE'];

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

    console.log(state.currentCountry);
  } catch (error) {
    console.error(error);
  }
};

const formatAnswers = function (string) {
  return string.toLowerCase().replaceAll(' ', '');
};

export const checkAnswer = function (answer) {
  try {
    const correctAnswer = formatAnswers(state.currentCountry.capitalCity);
    const submittedAnswer = formatAnswers(answer.answer);
    if (submittedAnswer === correctAnswer) return true;
    else return false;
  } catch (error) {
    console.error(error);
  }
};

export const pushCurrentScore = function () {
  // if (!state.currentScore) state.currentScore = 1;
  // if ((state.currentCountry = 1)) state.currentScore++;
  state.currentScore++;
  console.log(state.currentScore);
};
