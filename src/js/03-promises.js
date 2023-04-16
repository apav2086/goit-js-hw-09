import Notiflix from 'notiflix';
const form = document.querySelector('form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

function handleSubmit(event) {
  event.preventDefault();
  console.log(firstDelay.value);
  console.log(delayStep.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, firstDelay.value).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', handleSubmit);
