const _resultBlock = document.querySelector('.results');
const _resultChildren = _resultBlock.childNodes;
const _analyticBlock = document.querySelector('.results__analitic');
function showResultTitle() {
  _resultBlock.classList.remove('results_closed');
  _resultChildren[3].style.display = 'none';
  _analyticBlock.style.display = 'none';
  _resultChildren[5].style.display = 'none';
}
function hideResultTitle() {
  _resultBlock.classList.add('results_closed');
  _resultChildren[3].style.display = 'block';
  _analyticBlock.style.display = 'block';
  _resultChildren[5].style.display = 'block';
}
export {hideResultTitle, showResultTitle}