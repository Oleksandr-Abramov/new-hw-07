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
