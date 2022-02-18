import { getDuration, printDuration, minusDuration } from './getDuration.js'
import { sound } from './audio.js'

export let idIntervalSound;

export function initTimer(hours, minutes, seconds) {
    let dur = getDuration(hours, minutes, seconds);
    printDuration(dur);
    return dur;
}

export function timer(dur, intervalTimer) {
    if (dur.as('seconds')) {
        dur = minusDuration(dur);
        printDuration(dur);
        return dur;
    } else {
        clearInterval(intervalTimer);
        idIntervalSound = window.setInterval(playSound, 500);
    }
}

export function manageButtons(button) {
    const elements = (Array.from((button.parentNode).children)).filter(el => el.localName === 'button');

    if (button.name === 'start') {
        button.setAttribute('disabled', true);
        (elements.find(el => el.name === 'stop')).removeAttribute('disabled');
    }
    if (button.name === 'stop') {
        button.setAttribute('disabled', true);
        (elements.find(el => el.name === 'reload')).removeAttribute('disabled');
    }
    if (button.name === 'reload') {
        button.setAttribute('disabled', true);
        (elements.find(el => el.name === 'start')).removeAttribute('disabled');
    }
}

function playSound() {
    sound.play();
}