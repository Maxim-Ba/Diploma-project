import '../pages/main.css';
import NewsApi from './modules/ApiNews'

const queryInput = document.querySelector('.header__input');
const queryButton = document.querySelector('.button_blue');
const news = new NewsApi(queryInput);

queryButton.addEventListener('click', function () {
  news.getArticlesInformation()
    .catch(err => console.log(err));
  event.preventDefault();
})