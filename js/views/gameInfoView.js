class GameInfoView {
  _parentElement = document.querySelector('.game-info');
  _answerValidIcon = document.querySelector('.answer-validation__icon');
  _scoreValue = document.querySelector('.score__value');
  _timeValue = document.querySelector('.time__value');

  clear() {
    // this._formInput.value = '';
  }

  update(score, time) {
    // this._scoreValue.textContent = score;
    // this._timeValue.textContent = `${time}s`;
  }

  showAnswerIcon(boolean) {
    this._answerValidIcon.textContent = boolean ? '✅' : '🛑';
    this._answerValidIcon.classList.remove('hidden');
  }

  hideAnswerIcon() {
    this._answerValidIcon.classList.add('hidden');
  }

  // addTimerHandler(handler) {
  //   document.addEventListener('load', function() {
  //     this._timeValue.textContent =
  //   })
  //   handler()
  // }
}

export default new GameInfoView();
