function formatOrderDataElements(arr) {
  return [arr[2], toMonthWord(arr[1]), arr[0]];
}
function toMonthWord(month) {
  const monthArr = {
    '01': 'января',
    '02': 'февраля',
    '03': 'марта',
    '04': 'апреля',
    '05': 'мая',
    '06': 'июня',
    '07': 'июля',
    '08': 'августа',
    '09': 'сентября',
    '10': 'октября',
    '11': 'ноября',
    '12': 'декабря'
  }
  return monthArr[month];
}

export default function formatDate(DateISO) {
  const arrDate = DateISO.substring(0, 10).split('-');
  const correctOrderDate = formatOrderDataElements(arrDate).join(' ');
  return correctOrderDate;
}