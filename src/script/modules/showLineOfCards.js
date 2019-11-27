import Card from './Card';
export default class showLineOfCards{
  constructor(resultButton, containerCards){
    this.resultButton = resultButton;
    this.containerCards = containerCards;
    this.showThreeCards = this.showThreeCards.bind(this);
    this.resultButton.addEventListener('click', this.showThreeCards);
    this.resultButton.classList.remove('results__button_closed');
  }
  showThreeCards(){
    if (this.informationArticles.length < 4) {
      this.informationArticles.forEach(element => {
        new Card(element, this.containerCards);
      });
      this.informationArticles = [];
      return this.resultButton.classList.add('results__button_closed');
    }
    for (let i = 0; i < 3; i++) {
      new Card(this.informationArticles.shift(), this.containerCards);
    }
  }
}