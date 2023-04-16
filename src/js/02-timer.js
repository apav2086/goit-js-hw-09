// Described in documentation
import flatpickr from "flatpickr";
// Additional styles import
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerEl = document.querySelector('.timer');
const inputEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
//console.log(timerEl);
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
//console.log(secondsEl);
//divEl.setAttribute('style', 'font-size: 40px', 'display: inline');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);  

  }
}

startBtn.disabled = true;
 flatpickr(inputEl, options);
inputEl.addEventListener("input", flatpickr);
    if (options[4] <= options[2]) {
  console.log(options[4]);
  Notiflix.Notify.failure('❌ Please choose a date in the future');
      
} else {
  startBtn.disabled = false;
  
} 

let countdownTimer 
let updateTime = inputEl.value;
console.log(updateTime);
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
//console.log(options.defaultDate);
startBtn.addEventListener('click', () => {
countdownTimer = setInterval(() => {
   updateTime--;
  timerValueEl.innerHTML = updateTime;
  console.log(timerValueEl);
    if (updateTime === 0) {
        clearInterval(timerEl);
        alert('Time is up');
    }
}, 1000);
})



//divEl.setAttribute('style', 'display: flex', 'justify-content: flex-start');

