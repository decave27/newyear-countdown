const daysEl = document.getElementById('days'); 
const hoursEl = document.getElementById('hours'); 
const minuitsEl = document.getElementById('minuits'); 
const secondsEl = document.getElementById('seconds'); 


const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minuits = Math.floor (totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minuitsEl.innerHTML = minuits;
    secondsEl.innerHTML = seconds;

}

countdown();

setInterval(countdown , 1000);