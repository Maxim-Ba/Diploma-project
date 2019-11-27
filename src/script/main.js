import '../pages/main.css';
import NewsApi from './modules/ApiNews';
import showLineOfCards from './modules/showLineOfCards';
import HideOrVisualBlock from './modules/MainBlockModule';
import removeOldCards from './functions/removeOldCards';
import Validate from './modules/Validate';
import {hideResultTitle, showResultTitle, renderError} from './functions/showResultTitle';
import diasableInput from './functions/makeDisableInput';
// ---------Card
const containerCards = document.querySelector('.results__container_m-r-l-8px');
const queryInput = document.querySelector('.header__input');
const queryButton = document.querySelector('.button_blue');
const loadingBlock = document.querySelector('.loading');
const nothinFindBlock = document.querySelector('.nothing-find');
const resultsBlock = document.querySelector('.results');
const formElement = document.querySelector('form');
const warningField = document.querySelector('.header__error');
// ---------ValidateForm
const validateForm = new Validate(formElement, queryButton, warningField);
// ---------Api
const news = new NewsApi(queryInput);
const  showHideLoadingBlock = new HideOrVisualBlock(loadingBlock, 'loading');
const  showHideNothinFindBlock = new HideOrVisualBlock(nothinFindBlock, 'nothing-find');
const  showHideResultsBlock = new HideOrVisualBlock(resultsBlock, 'results');
queryButton.addEventListener('click', function () {
  showHideLoadingBlock.makeVisible();
  diasableInput(queryInput);
  showHideNothinFindBlock.makeHide();
  showHideResultsBlock.makeHide();
  showResultTitle();
  removeOldCards(containerCards);
  news.getArticlesInformation()
    .then(res => {
        window.sessionStorage.setItem('request', JSON.stringify(res));
        window.localStorage.setItem('request', JSON.stringify(res));
        window.localStorage.setItem('q', queryInput.value);
      return showFunction();
    })
    .catch((err) => {
      console.log(err);
      diasableInput(queryInput);
      showHideLoadingBlock.makeHide();
      renderError(err);
    });
  event.preventDefault();
});
// ---------Показать еще
const resultButton = document.querySelector('.results__button')
const showLine = new showLineOfCards(resultButton, containerCards)
//Script render Card
function showFunction() {
  hideResultTitle();
  diasableInput(queryInput);
  showHideLoadingBlock.makeHide();
  const informationArticles = JSON.parse(window.sessionStorage.request);
  if (informationArticles.length === 0) {
    showHideNothinFindBlock.makeVisible();
    return console.log(`Ничего не найдено`);
  }
  showLine.informationArticles = informationArticles;
  showLine.showThreeCards();
  showHideResultsBlock.makeVisible();
}
