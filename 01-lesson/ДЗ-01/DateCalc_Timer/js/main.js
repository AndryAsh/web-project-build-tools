'use strict';

import { clickEvent } from './switch.js'
import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import { initTimer, timer, manageButtons, idIntervalSound } from './timer.js'

let intervalTimer;

initTimer(0, 0, 0);

// Вешаем обработчик события на блок с классом description
document.querySelector('.description').addEventListener('click', clickEvent, false);

// Обрабатываем нажатие кнопки в форме калькулятора дат
document.getElementById('date-calc').onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firsDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (!firsDate || !secondDate) {
        printError('Вы не ввели дату!');
    } else {
        const dateDiff = getDateDiff(firsDate, secondDate);
        printResult(dateDiff);
    }
}

// Обрабатываем нажатие кнопки в форме таймера
document.getElementById('date-timer').onsubmit = (event) => {
    event.preventDefault();

    manageButtons(event.submitter);

    const formData = new FormData(event.target);

    if (event.submitter.name === 'start') {

        let hoursDate, minutesDate, secondsDate;

        formData.get('hoursDate') ? hoursDate = formData.get('hoursDate') : hoursDate = undefined;
        formData.get('minutesDate') ? minutesDate = formData.get('minutesDate') : minutesDate = undefined;
        formData.get('secondsDate') ? secondsDate = formData.get('secondsDate') : secondsDate = undefined;

        if (!hoursDate & !minutesDate & !secondsDate) {
            printError('Не введен интервал времени!');
        } else {
            let dur = initTimer(hoursDate, minutesDate, secondsDate);
            intervalTimer = window.setInterval(() => { dur = timer(dur, intervalTimer) }, 1000);
        }
    } else if (event.submitter.name === 'stop') {
        clearInterval(intervalTimer);
        clearInterval(idIntervalSound);
    } else if (event.submitter.name === 'reload') {
        initTimer(0, 0, 0);
    }
}
