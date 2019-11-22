export default function nowDay() {
  const a = new Date();
  a.getDay()
  // const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  // console.log(days[a.getDay()]);
  console.log(a.toISOString());
}