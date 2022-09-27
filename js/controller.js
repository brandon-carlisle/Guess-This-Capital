import '../style.css';
import * as model from './model';
import cardView from './views/cardView';
import formView from './views/formView';

const controlCard = async function () {
  await model.loadCountry();
  cardView.render(model.state.currentCountry);
};

const controlSubmitAnswer = function (data) {
  if (model.checkAnswer(data)) {
    alert('Correct Answer');
  } else {
    alert(
      `Wrong Answer, the correct answer was ${model.state.currentCountry.capitalCity}`
    );
  }
};

const init = function () {
  controlCard();
  formView.submitAnswerHandler(controlSubmitAnswer);
};

init();
