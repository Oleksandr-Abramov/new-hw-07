import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');

const LOCAL_STORAGE = 'videoplayer-current-time';
let currentTime = localStorage.getItem(LOCAL_STORAGE);
currentTime !== null ? player.setCurrentTime(currentTime) : 0;

player.on(
  'timeupdate',
  throttle(function (time) {
    currentTime = localStorage.setItem(LOCAL_STORAGE, time.seconds);
  }, 1000)
);
// const namesOfMonth = [
//   'Січень',
//   'Лютий',
//   'Березень',
//   'Квітень',
//   'Травень',
//   'Червень',
//   'Липень',
//   'Серпень',
//   'Вересень',
//   'Жовтень',
//   'Листопад',
//   'Грудень',
// ];
// const namesOfDay = [
//   'Неділя',
//   'Понеділок',
//   'Вівторок',
//   'Середа',
//   'Четвер',
//   'Пятниця',
//   'Субота',
// ];
// const month = document.querySelector('.date-month');
// const date = document.querySelector('.date');
// const day = document.querySelector('.date-day');
// const year = document.querySelector('.date-year');
// const time = document.querySelector('.digital-clock');

// function getActiveTime() {
//   const time = new Date();
//   getYear(time);
//   getMonth(time);
//   getDay(time);
//   getDate(time);
//   hour(time);
// }
// setInterval(getActiveTime, 1000);

// function getYear(time) {
//   year.textContent = time.getFullYear();
// }
// function getMonth(time) {
//   month.textContent = namesOfMonth[time.getMonth()];
// }
// function getDay(time) {
//   day.textContent = namesOfDay[time.getDay()];
// }
// function getDate(time) {
//   date.textContent = time.getDate();
// }

// function hour(times) {
//   const hours = times.getHours();
//   const minutes = times.getMinutes();
//   const seconds = times.getSeconds();
//   time.textContent = `${hours} : ${minutes} : ${seconds}`;
// }
