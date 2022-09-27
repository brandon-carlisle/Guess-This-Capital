import '../style.css';
import * as model from './model';
import cardView from './views/cardView';
import formView from './views/formView';

const controlCard = async function () {
  await model.loadCountry();
  cardView.render(model.state.currentCountry);
};

const controlSubmitAnswer = function (data) {
  // Check if answer is correct
  if (model.checkAnswer(data)) {
    model.pushCurrentScore();
    formView.clear();
    setTimeout(() => {
      controlCard();
    }, 2000);
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
