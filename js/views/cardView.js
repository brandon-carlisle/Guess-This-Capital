class CardView {
  _parentElement = document.querySelector('.card');

  clear() {
    this._parentElement.innerHTML = '';
  }

  render(data) {
    this.clear();
    const markup = `
    <div class="card">
      <div class="card__flag">
        <img src="${data.flag}" alt="${data.name} flag" class="card__flag--img" />
      </div>
      <h2 class="card__name">${data.name}</h2>
    </div>
    `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new CardView();
