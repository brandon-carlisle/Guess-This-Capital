class GameInfoView {
  _parentElement = document.querySelector('.game-info');
  _formInput = document.querySelector('.form__input');

  clear() {
    this._formInput.value = '';
  }

  submitAnswerHandler(handler) {
    handler();
  }
}

export default new GameInfoView();
