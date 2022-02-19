'use strict';

/*
 Функция обработки события 'click'
*/
export function clickEvent(e) {
    e.preventDefault();
    const chosenTarget = e.target || e.srcElement;
    if (!chosenTarget) return;

    if (/(^|\s)jss(\s|$)/.test(chosenTarget.className)) {
        toggle(chosenTarget, true);
    }
}
/* 
 Функция переключатель
*/
function toggle(el, set) {
    const cls = el.getAttribute('data-rel');

    // Поиск родительского элемента. Ищем элемент с классом 'jsw'
    do {
        el = el.parentNode;
        if (!el) return;    // Если не найден - делать нечего.
    } while (!/(^|\s)jsw(\s|$)/.test(el.className));

    if (set) {
        el.className = 'jsw ' + cls;    // Установка класса.
    }
}
