function nowDay() {
  const a = new Date();
  a.getDay();
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return a.getDay()
}
function nowMonth() {
  const a = new Date();
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return months[a.getMonth()]
}

export {nowDay, nowMonth}