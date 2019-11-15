import '../pages/main.css';
import NewsApi from './modules/ApiNews';
import Card from './modules/Card';
// ---------Card
const containerCards = document.querySelector('.results__container_m-r-l-8px');
// ---------Card
// ---------Api
const queryInput = document.querySelector('.header__input');
const queryButton = document.querySelector('.button_blue');
const news = new NewsApi(queryInput);
queryButton.addEventListener('click', function () {
  news.getArticlesInformation()
    .then(res => {
      res.forEach(element => {
        let card = new Card(element, containerCards);
      });
    })
    .catch(err => console.log(err));
  event.preventDefault();
});
// ---------Api
