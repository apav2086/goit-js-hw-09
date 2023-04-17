
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleClose(selectedDates[0]);  

  }
}

startBtn.disabled = true;
 flatpickr(inputEl, options);
let deltaTime = 0;
startBtn.addEventListener('click', handleStartBtnClick);

function handleStartBtnClick() {
  let intervalId = null;
  intervalId = setInterval(() => {
    deltaTime -= 1000;
    if (deltaTime < 0) {
      clearInterval(intervalId);
      inputEl.disabled = false;
      Notiflix.Notify.info("Time is over.")
      return;
    }
    updateMarkup(convertMs(deltaTime))
  }, 1000)
} 
function handleClose(selectedDate) {
  const date = new Date();
  const currentUnixTime = date.getTime();
  const selectedUnixTime = Date.parse(selectedDate);
  deltaTime = selectedUnixTime - currentUnixTime;
  if (deltaTime > 0) {
    startBtn.disabled = false;
    inputEl.disabled = true;
  } else {
    Notiflix.Notify.failure("Please select time in the future.");
  }
}

function updateMarkup({ days, hours, minutes, seconds }) {
  daysEl.textContent = String(addZero(days));
  hoursEl.textContent = String(addZero(hours));
  minutesEl.textContent = String(addZero(minutes));
  secondsEl.textContent = String(addZero(seconds));
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addZero(value) {
  return String(value).padStart(2, '0');
}

