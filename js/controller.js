import '../style.css';
import * as model from './model';
import cardView from './views/cardView';
import formView from './views/formView';
import gameInfoView from './views/gameInfoView';

const controlCard = async function () {
  await model.loadCountry();
  cardView.render(model.state.currentCountry);
};

const controlGameInfo = function (state) {
  const score = model.state.currentScore;
  const time = model.state.gameTime;
  gameInfoView.update(score, time);
};

const controlSubmitAnswer = function (data) {
  // If answer is correct
  if (model.checkAnswer(data)) {
    model.pushCurrentScore();
    formView.clear();
    controlGameInfo();
    gameInfoView.showAnswerIcon(true);

    setTimeout(() => {
      controlCard();
      gameInfoView.hideAnswerIcon();
    }, 2000);
  }

  // If answer is incorrect
  if (!model.checkAnswer(data)) {
    formView.clear();
    controlGameInfo();
    gameInfoView.showAnswerIcon(false);

    setTimeout(() => {
      controlCard();
      gameInfoView.hideAnswerIcon();
    }, 2000);
  }
};

const init = function () {
  controlCard();
  formView.submitAnswerHandler(controlSubmitAnswer);
};

init();
