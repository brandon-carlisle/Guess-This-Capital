class BodyView {
  _parentElement = document.querySelector('body');
  _btn = document.querySelector('.btn__start-game');

  clear() {
    this._parentElement.innerHTML = '';
  }

  render() {
    this.clear();
    const markup = `
      <button class="btn btn__start-game">Start Game!</button>
    `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  startGameBtnHandler(handler) {
    this._btn.addEventListener('click', function () {
      handler();
    });
  }
}

export default new BodyView();
