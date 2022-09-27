import '../style.css';
import * as model from './model';
import { wait } from './helpers';
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

const controlSubmitAnswer = async function (data) {
  // If answer is correct
  if (model.checkAnswer(data)) {
    model.pushCurrentScore();
    formView.clear();
    controlGameInfo();
    gameInfoView.showAnswerIcon(true);

    await wait(2);
    controlCard();
    gameInfoView.hideAnswerIcon();
  }

  // If answer is incorrect
  if (!model.checkAnswer(data)) {
    formView.clear();
    controlGameInfo();
    gameInfoView.showAnswerIcon(false);

    await wait(2);
    controlCard();
    gameInfoView.hideAnswerIcon();
  }
};

const init = function () {
  controlCard();
  formView.submitAnswerHandler(controlSubmitAnswer);
};

init();
