import '../pages/main.css';
import NewsApi from './modules/ApiNews';
import Card from './modules/Card';
import displayNoneOrBlock from './functions/displayNone-Block'
// ---------Card
const containerCards = document.querySelector('.results__container_m-r-l-8px');
// ---------Card
// ---------Api
const queryInput = document.querySelector('.header__input');
const queryButton = document.querySelector('.button_blue');
const loadingBlock = document.querySelector('.loading');
const nothinFindBlock = document.querySelector('.nothing-find');
const resultsBlock = document.querySelector('.results');
const news = new NewsApi(queryInput);
queryButton.addEventListener('click', function () {
  displayNoneOrBlock(loadingBlock, 'loading');
  news.getArticlesInformation()
    .then(res => {
      displayNoneOrBlock(loadingBlock, 'loading');
      console.log(res)
      if (res.length == 0) {
        console.log('nothinFindBlock')
        displayNoneOrBlock(nothinFindBlock, 'nothing-find');
        return Promise.reject(`Ничего не найдено`);;
      }
      displayNoneOrBlock(resultsBlock, 'results')
      res.forEach(element => {
        let card = new Card(element, containerCards);
      });
    })
    .catch(err => console.log(err));
  event.preventDefault();
});
// ---------Api
