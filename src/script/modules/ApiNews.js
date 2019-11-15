export default class NewsApi {
  constructor(input){
    this.stringNews = input;
    this._apiKey = '13f71805e5ce4249978a94ba058cd269';
    this._dataFrom = new Date();
    this._dataTo = new Date(this._dataFrom.valueOf() - ((24 * 60 * 60 * 1000) * 7))
    this._language = 'ru';
    this._pageSize = '100';
    this._queryString = 'https://newsapi.org/v2/everything?';
    this._queryStringOptions = '&apiKey=' + this._apiKey +
      '&from=' + this._dataFrom.toISOString() +
      '&to=' + this._dataTo.toISOString() +
      '&language=' + this._language +
      '&pageSize=' + this._pageSize;
    this.getArticlesInformation = this.getArticlesInformation.bind(this)
  }
  getArticlesInformation(){
    return fetch(this._queryString +'q='+ this.stringNews.value + this._queryStringOptions, {
      method: 'GET'
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(res => {
      return res.articles;
  })
};
}

