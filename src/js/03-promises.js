import Notiflix from 'notiflix';
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const delay = parseInt(event.target.delay.value);
  const step = parseInt(event.target.step.value);
  const amount = parseInt(event.target.amount.value);

  handlePromise({ delay, step, amount })
  
  event.target.delay.value = '';
  event.target.step.value = '';
   event.target.amount.value = '';
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseValue = { position, delay };

  return new Promise((resolve, reject) => {
 if (shouldResolve) {
   resolve(promiseValue);
  } else {
   reject(promiseValue);
  }
  })
 
}
function handlePromise({ delay, step, amount }) {
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay)
      });
    delay += step;
  }
}

