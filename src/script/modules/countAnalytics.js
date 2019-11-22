export default function sortByDay(req) {
  let obj = {
    0:[],
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
  }
  req.forEach(element => {
    let dayOfArticle = new Date(element.publishedAt).getDay();
    obj[dayOfArticle].push(element)
  });
  return _countKeyWord(obj);
}

function _countKeyWord(obj) {
  // день:{кол-во  статей, количество упоминаний в title b discription}
  let finalObj = {
    0:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
    1:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
    2:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
    3:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
    4:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
    5:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
    6:{
      amountArticle:0,
      amountKeyWord:0,
      dateDay:0
    },
  }
  for (var key in finalObj) {
    finalObj[key].amountArticle = obj[key].length;
    finalObj[key].amountKeyWord +=  _amountKeyWord(window.localStorage.getItem('q'), obj[key])
    finalObj[key].amountKeyWord =
  }
  return finalObj;
}

function _amountKeyWord(keyWord, arr) {
  let result = 0
  keyWord = new RegExp(keyWord,'gi');
  arr.forEach(element =>{
    if (element.title.match(keyWord)!= null){
    result += element.title.match(keyWord).length;
    }
    if (element.description.match(keyWord) != null){
      result += element.description.match(keyWord).length;
    }
  })
    return result;
}