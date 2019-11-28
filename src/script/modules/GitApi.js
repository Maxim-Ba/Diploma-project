export default class GitApi {
  constructor() {
    this.PATH = 'https://api.github.com/repos/maxim-ba/Diploma-project/commits';
    this.query = this.query.bind(this);
  };
  query() {
    return fetch(this.PATH, {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        return res;
      }
      )
  };
};