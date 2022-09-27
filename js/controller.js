import '../style.css';
import * as model from './model';
import cardView from './views/cardView';

const controlCard = async function () {
  await model.loadCountry();
  cardView.render(model.state.currentCountry);
};

controlCard();
