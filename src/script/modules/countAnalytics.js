export default function sortByDay(req) {
  let obj = {
    0: [],//сегодня
    1: [],//вчера
    2: [],//позавчера
    3: [],
    4: [],
    5: [],
    6: [],
  };
  const date = new Date();
  const day = date.getDate();
  let i = 0;
  let prevDay = 0;
  for (let key in obj) {
    prevDay = day - i;
    req.forEach(element => {
      if (new Date(element.publishedAt).getDate() === prevDay) {
        obj[key].push(element);
      }
    });
    i = i + 1;
  };
  return _countKeyWord(_format(obj));
};
function _format(obj) {
  // заполняет пустые свойства обьекта
  for (let key in obj) {
    if (obj[key].length == 0) {
      obj[key][0] = {};
      obj[key][0].description = '';
      obj[key][0].title = '';
      const date = new Date(new Date().setDate(new Date().getDate() - key)).toISOString();
      obj[key][0].publishedAt = date;
    }
  };
  return obj;
};

function _countKeyWord(obj) {
  // день:{кол-во  статей, количество упоминаний в title и discription}
  let finalObj = {
    0: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
    1: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
    2: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
    3: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
    4: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
    5: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
    6: {
      amountArticle: 0,
      amountKeyWord: 0,
      dateDay: 0,
      dayIs: ''
    },
  };
  for (let key in finalObj) {
    finalObj[key].amountArticle = obj[key].length;
    finalObj[key].amountKeyWord += _amountKeyWord(window.localStorage.getItem('q'), obj[key]);
    finalObj[key].dateDay = new Date(obj[key][0].publishedAt).getDate();
    finalObj[key].dayIs = whatIsDay(new Date(obj[key][0].publishedAt).getDay());
  };
  return finalObj;
}

function _amountKeyWord(keyWord, arr) {
  let result = 0;
  keyWord = new RegExp(keyWord, 'gi');
  arr.forEach(element => {
    if (element.title.match(keyWord) != null) {
      result += element.title.match(keyWord).length;
    }
    if (element.description.match(keyWord) != null) {
      result += element.description.match(keyWord).length;
    }
  })
  return result;
};

function whatIsDay(day) {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return days[day];
};