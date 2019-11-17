import '../pages/main.css';
import NewsApi from './modules/ApiNews';
import Card from './modules/Card';
import HideOrVisualBlock from './modules/MainBlockModule';
import removeOldCards from './functions/removeOldCards';
import Validate from './modules/Validate';
// ---------Card
const containerCards = document.querySelector('.results__container_m-r-l-8px');
// ---------Card
const queryInput = document.querySelector('.header__input');
const queryButton = document.querySelector('.button_blue');
const loadingBlock = document.querySelector('.loading');
const nothinFindBlock = document.querySelector('.nothing-find');
const resultsBlock = document.querySelector('.results');
const formElement = document.querySelector('form');
const warningField = document.querySelector('.header__error');
// ---------ValidateForm
const validateForm = new Validate(formElement, queryButton, warningField);
// ---------ValidateForm
// ---------Api
const news = new NewsApi(queryInput);
const  showHideLoadingBlock = new HideOrVisualBlock(loadingBlock, 'loading');
const  showHideNothinFindBlock = new HideOrVisualBlock(nothinFindBlock, 'nothing-find');
const  showHideResultsBlock = new HideOrVisualBlock(resultsBlock, 'results');
queryButton.addEventListener('click', function () {
  showHideLoadingBlock.makeVisible();
  showHideNothinFindBlock.makeHide();
  showHideResultsBlock.makeHide();
  removeOldCards(containerCards);
  news.getArticlesInformation()
    .then(res => {
        window.sessionStorage.setItem('request', JSON.stringify(res));
      return showHideFunction();
    })
    .catch((err) => {
      console.log(err);
      showHideLoadingBlock.makeHide();
    });
  event.preventDefault();
});
// ---------Api
//Script render Card
function showHideFunction() {
  
  showHideLoadingBlock.makeHide();
  const informationArticles = JSON.parse(window.sessionStorage.request);
  if (informationArticles.length === 0) {
    showHideNothinFindBlock.makeVisible();
    return console.log(`Ничего не найдено`);
  }
  informationArticles.forEach(element => {
    let card = new Card(element, containerCards);
  });
  showHideResultsBlock.makeVisible();
}

