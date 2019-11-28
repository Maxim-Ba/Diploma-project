import '../pages/main.css';
import NewsApi from './modules/ApiNews';
import ShowThreeCards from './modules/ShowThreeCards';
import HidenOrShowedBlock from './modules/MainBlockModule';
import removeOldCards from './functions/removeOldCards';
import Validate from './modules/Validate';
import { hideResultTitle, showResultTitle, renderError } from './functions/showResultTitle';
import disableInput from './functions/makeDisableInput';
import Card from './modules/Card';
// ---------Card
const containerCards = document.querySelector('.results__container_m-r-l-8px');
const queryInput = document.querySelector('.header__input');
const queryButton = document.querySelector('.button_blue');
const loadingBlock = document.querySelector('.loading');
const nothingFindBlock = document.querySelector('.nothing-find');
const resultsBlock = document.querySelector('.results');
const formElement = document.querySelector('form');
const warningField = document.querySelector('.header__error');

// ---------ValidateForm
const validateForm = new Validate(formElement, queryButton, warningField);
// ---------Api
const news = new NewsApi();
const LoadingBlock = new HidenOrShowedBlock(loadingBlock, 'loading');
const NothingFindBlock = new HidenOrShowedBlock(nothingFindBlock, 'nothing-find');
const ResultsBlock = new HidenOrShowedBlock(resultsBlock, 'results');
queryButton.addEventListener('click', clickButtonToSendQueryToApi);
// ---------Показать еще
const resultButton = document.querySelector('.results__button');
const showThreeCards = new ShowThreeCards(resultButton, containerCards, Card);
//Script render Card
function showRequestInformation() {
  hideResultTitle();
  disableInput(queryInput);
  LoadingBlock.makeHide();
  const informationArticles = JSON.parse(window.sessionStorage.request);
  if (informationArticles.length === 0) {
    NothingFindBlock.makeVisible();
    return console.log(`Ничего не найдено`);
  }
  showThreeCards.informationArticles = informationArticles;
  showThreeCards.showThreeCards();
  ResultsBlock.makeVisible();
};
function clickButtonToSendQueryToApi() {
  LoadingBlock.makeVisible();
  disableInput(queryInput);
  NothingFindBlock.makeHide();
  ResultsBlock.makeHide();
  showResultTitle();
  removeOldCards(containerCards);
  news.getArticlesInformation(queryInput.value)
    .then(res => {
      window.sessionStorage.setItem('request', JSON.stringify(res));
      window.localStorage.setItem('request', JSON.stringify(res));
      window.localStorage.setItem('q', queryInput.value);
      return showRequestInformation();
    })
    .catch((err) => {
      console.log(err);
      if (err == 'TypeError: Failed to fetch') {
        err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
      }
      disableInput(queryInput);
      LoadingBlock.makeHide();
      renderError(err);
    });
  event.preventDefault();
};