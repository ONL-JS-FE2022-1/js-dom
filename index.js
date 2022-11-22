/*
1. Маємо число
2. Маємо дві кнопки: +, -
3. За натисненням кнопки "+" число збільшується на 1
4. За натисненням "-" число зменшується на 1
*/

let num = 0;

const div = document.querySelector('#number');
const [decrement, increment] = document.querySelectorAll('.btn');

function updateDiv() {
    div.innerHTML = num;
}

decrement.addEventListener('click', () => {
    num--;
    updateDiv();
})

increment.addEventListener('click', () => {
    num++;
    updateDiv();
})