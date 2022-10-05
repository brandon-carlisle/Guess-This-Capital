class GameInfoView {
  _parentElement = document.querySelector('.game-info');
  _answerValidIcon = document.querySelector('.answer-validation__icon');
  _scoreValue = document.querySelector('.score__value');
  _timeValue = document.querySelector('.time__value');

  showAnswerIcon(boolean) {
    this._answerValidIcon.textContent = boolean ? '✅' : '🛑';
    this._answerValidIcon.classList.remove('hidden');
  }

  hideAnswerIcon() {
    this._answerValidIcon.classList.add('hidden');
  }
}

export default new GameInfoView();
