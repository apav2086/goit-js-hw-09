const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
//console.log(stopBtn);
let colorChangeTimer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener('click', () => {
     colorChangeTimer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;
  
});

stopBtn.addEventListener('click', () => {
        clearInterval(colorChangeTimer);
    stopBtn.disabled = true;
    startBtn.disabled = false;
    
});
       