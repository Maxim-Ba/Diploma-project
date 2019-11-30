export default class ShowThreeCards {
  constructor(resultButton, containerCards, callBack) {
    this.resultButton = resultButton;
    this.containerCards = containerCards;
    this.callBack = callBack;
    this.showThreeCards = this._showThreeCards.bind(this);
    this.clickResultButtonToShowThreeCards = this._showThreeCards.bind(this);
    this.resultButton.addEventListener('click', this.clickResultButtonToShowThreeCards);
    this.resultButton.classList.remove('results__button_closed');
  };
  _showThreeCards() {
    const LIMIT_LENGTH_OF_NEWSCARD_LINE = 4;
    if (this.informationArticles.length < LIMIT_LENGTH_OF_NEWSCARD_LINE) {
      this.informationArticles.forEach(element => {
        new this.callBack(element, this.containerCards);
      });
      this.informationArticles = [];
      return this.resultButton.classList.add('results__button_closed');
    };
    for (let i = 0; i < (LIMIT_LENGTH_OF_NEWSCARD_LINE-1); i++) {
      new this.callBack(this.informationArticles.shift(), this.containerCards);
    };
  };
};