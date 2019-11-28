import formatDate from '../functions/formatDate'

export default class GitCard {
  constructor(cardObject, parentElement) {
    this.authorAvatar = cardObject.author.avatar_url;
    this.commitMessage = cardObject.commit.message;
    this.commiterDate = formatDate(cardObject.commit.committer.date);
    this.commiterEmail = cardObject.commit.committer.email;
    this.commiterName = cardObject.commit.committer.name;

    this.parentElement = parentElement;
    parentElement.appendChild(this._render());
  };

  _render() {
    //make elements and attributs
    const elementCard = document.createElement('article');
    elementCard.classList.add('card', 'carousel-cell');
    const elementTitle = document.createElement('h2');
    elementTitle.classList.add('card__title');
    const linkElement = document.createElement('a');
    linkElement.classList.add('card__link');
    linkElement.setAttribute('target', '_blank');
    linkElement.setAttribute('href', 'https://github.com/Maxim-Ba/Diploma-project/commits/master');
    const cardDate = document.createElement('p');
    cardDate.classList.add('card__date');
    const containerCard = document.createElement('div');
    containerCard.classList.add('card__container');
    const cardImg = document.createElement('img');
    cardImg.classList.add('card__img');
    cardImg.setAttribute('src', this.authorAvatar);
    cardImg.setAttribute('alt', 'author`s avatar picture');
    const containerFlex = document.createElement('div');
    containerFlex.classList.add('container-flex');
    const cardAuthor = document.createElement('cite');
    cardAuthor.classList.add('card__author');
    const cardEmail = document.createElement('p');
    cardEmail.classList.add('card__email');
    const cardComment = document.createElement('blockquote');
    cardComment.classList.add('card__comment');

    //make textContent
    cardComment.textContent = this.commitMessage;
    cardEmail.textContent = this.commiterEmail;
    cardAuthor.textContent = this.commiterName;
    cardDate.textContent = this.commiterDate;
    //appendChild

    containerFlex.appendChild(cardAuthor);
    containerFlex.appendChild(cardEmail);
    containerCard.appendChild(cardImg);
    containerCard.appendChild(containerFlex);

    linkElement.appendChild(cardDate);
    linkElement.appendChild(containerCard);

    linkElement.appendChild(cardComment);
    elementCard.appendChild(linkElement);
    elementCard.appendChild(elementTitle);
    elementCard.style.position = 'absolute';
    return elementCard;
  }
};