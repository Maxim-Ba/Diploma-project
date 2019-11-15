import formatDate from '../functions/formatDate'

export default class Card{
  constructor(cardObject, parentElement){
    this.source = cardObject.source.name;
    this.title = cardObject.title;
    this.publishedAt = formatDate(cardObject.publishedAt);
    this.description = cardObject.description;
    this.urlToImage = cardObject.urlToImage;
    this.parentElement = parentElement;
    parentElement.appendChild(this.render());
  }
  render(){
    //make elements and attributs
    const elementCard = document.createElement('article');
    elementCard.classList.add('article');
    const linkElement = document.createElement('a');
    linkElement.classList.add('article__link');
    linkElement.setAttribute('target', '_blank');
    linkElement.setAttribute('href', 'https://newsapi.org');
    const imgElement = document.createElement('img');
    imgElement.classList.add('article__img');
    imgElement.setAttribute('src', this.urlToImage);
    imgElement.setAttribute('alt', 'image of this article');
    const containerDiscrElement = document.createElement('div');
    containerDiscrElement.classList.add('article__container-margin-auto');
    const dateElement = document.createElement('p');
    dateElement.classList.add('article__date');
    const titleElement = document.createElement('h4');
    titleElement.classList.add('article__title');
    const discriptionElement = document.createElement('p');
    discriptionElement.classList.add('article__discription');
    const sourceElement = document.createElement('p');
    sourceElement.classList.add('article__source');
    //make textContent
    dateElement.textContent = this.publishedAt;
    titleElement.textContent = this.title;
    discriptionElement.textContent = this.description;
    sourceElement.textContent = this.source;
    //appendChild
    
    containerDiscrElement.appendChild(dateElement);
    containerDiscrElement.appendChild(titleElement);
    containerDiscrElement.appendChild(discriptionElement);
    containerDiscrElement.appendChild(sourceElement);
    
    linkElement.appendChild(imgElement);
    linkElement.appendChild(containerDiscrElement);
    elementCard.appendChild(linkElement);
    return elementCard;
  }
}

