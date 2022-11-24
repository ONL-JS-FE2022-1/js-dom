/*
1. Маємо div
2. Маємо 5 кнопок, на кожній написаний колір
3. За натисненням на кнопку фоновий колір оцього діва змінюється на відповідний колір вказаний на кнопці
*/

const buttons = document.querySelectorAll('button');
const div = document.querySelector('#root');

for (const btn of buttons) {
    btn.addEventListener('click', clickHandler);
}

function clickHandler ({target: {dataset: {color}, parentNode}}) {
    parentNode.style.backgroundColor = color;
}