import '../pages/analytics.css';
import sortByDay from './modules/countAnalytics';
import nowDay from './functions/nowDay';

const reqest = JSON.parse(window.localStorage.getItem('request'));
const numberOfArticles = reqest.length
sortByDay(reqest);

