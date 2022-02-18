import { Duration } from 'https://moment.github.io/luxon/es6/luxon.min.js'

const resultTimer = document.getElementById('timer__result');

export function getDuration(h = 0, m = 0, s = 0) {
    const obj = { hours: h, minutes: m, seconds: s };
    return Duration.fromMillis((Duration.fromObject(obj)).toMillis());
}

export function printDuration(dur) {
    const arrayTime = dur.toFormat('h m s').split(' ');
    resultTimer.innerText = `Часы: ${arrayTime[0]} Минуты: ${arrayTime[1]} Секунды: ${arrayTime[2]}`;
}

export function minusDuration(dur, hourses = 0, minutes = 0, seconds = 1) {
    const diffDuration = getDuration(hourses, minutes, seconds);
    return dur.minus(diffDuration);
}
