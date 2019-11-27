import '../pages/analytics.css';
import sortByDay from './modules/countAnalytics';
import {nowMonth} from './functions/nowDay';
import renameTitle from './functions/renameTitle';
const reqest = JSON.parse(window.localStorage.getItem('request'));
const numberOfArticles = reqest.length;
const analyticsInformation = sortByDay(reqest);
const mouth = document.querySelector('.diagram__date');
const newsOfWeek = document.querySelector('#news-of-week');
const amountOfQuerys = document.querySelector('#amount-of-querys');
mouth.textContent = 'Дата ' + '(' + nowMonth() + ')';
newsOfWeek.textContent = numberOfArticles;
renameTitle( document.querySelector('.general-data-analytics__query'), window.localStorage.getItem('q'))
const week = [
  {day : document.querySelector('#day-1-name')},
  {day : document.querySelector('#day-2-name')},
  {day : document.querySelector('#day-3-name')},
  {day : document.querySelector('#day-4-name')},
  {day : document.querySelector('#day-5-name')},
  {day : document.querySelector('#day-6-name')},
  {day : document.querySelector('#day-7-name')}
];

const weekDiagramRightColumn = [
  {diagram : document.querySelector('#day-1')},
  {diagram : document.querySelector('#day-2')},
  {diagram : document.querySelector('#day-3')},
  {diagram : document.querySelector('#day-4')},
  {diagram : document.querySelector('#day-5')},
  {diagram : document.querySelector('#day-6')},
  {diagram : document.querySelector('#day-7')}
]
let countOfQuery = 0;
week.forEach((element, index) => {
  element.day.textContent = analyticsInformation[index].dayIs + ', ' + analyticsInformation[index].dateDay;
  let amount = analyticsInformation[index].amountKeyWord;
  weekDiagramRightColumn[index].diagram.textContent = amount;
  weekDiagramRightColumn[index].diagram.style.background = `linear-gradient(to right, #2F71E5 ${amount}%, #F5F6F7 ${amount}%, #F5F6F7 100%)`
  countOfQuery += amount;
});
amountOfQuerys.textContent = countOfQuery;