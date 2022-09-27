class FormView {
  _parentElement = document.querySelector('.form');

  clear() {
    this._parentElement.innerHTML = '';
  }

  submitAnswerHandler(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
}

export default new FormView();
