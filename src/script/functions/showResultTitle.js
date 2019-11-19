const _resultBlock = document.querySelector('.results');

const _cards = document.querySelector('.results__container_m-r-l-8px')
const _resultButton = document.querySelector('.results__button');
const _analyticBlock = document.querySelector('.results__analitic');
const errMessageTag = document.createElement('p');
errMessageTag.style.margin = '0 auto';
errMessageTag.style.fontSize = '2em';
function showResultTitle() {
  _resultBlock.classList.remove('results_closed');
  _cards.classList.add('results__container_closed');
  _analyticBlock.classList.add('results__analitic_closed');
  _resultButton.classList.add('results__button_closed');
}
function hideResultTitle() {
  _resultBlock.classList.add('results_closed');
  _cards.classList.remove('results__container_closed');
  _analyticBlock.classList.remove('results__analitic_closed');
  _resultButton.classList.remove('results__button_closed');
}
function renderError(err) {
  _cards.classList.remove('results__container_closed');
  errMessageTag.textContent = err;
  _cards.appendChild(errMessageTag);
}
export {hideResultTitle, showResultTitle, renderError}