const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const breakStop = document.querySelector('.break');
const timer = document.querySelector('.timer')

let i = 0;
let timeInterval;
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
breakStop.addEventListener('click', breakTimer);

function startTimer() {
  timeInterval = setInterval(() => {
    timer.innerHTML = i++;
  }, 100)
  start.setAttribute('disabled', '');
  timer.classList.add('ativado');
}

function stopTimer() {
  clearInterval(timeInterval);
  start.removeAttribute('disabled');
  timer.classList.remove('ativado')

}

function breakTimer() {
  timer.innerHTML = 0;
  timeInterval = 0;
  i = 0;
}
