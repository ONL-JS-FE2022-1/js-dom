/*
1. Маємо div
2. Маємо дві кнопки - на одній написано "Зробити червоним", на другій - "Зробитии зеленим"
3. За натисненням на кнопку фоновий колір оцього діва змінюється на відповідний колір, вказаний на кнопці.

*/

const div = document.querySelector('.box');
const classList = div.classList;
console.log(classList);
const [red, green] = document.querySelectorAll('.btn');

red.addEventListener('click', () => {
    classList.toggle('red-little');
})

green.addEventListener('click', () => {
    classList.toggle('green-big');
})