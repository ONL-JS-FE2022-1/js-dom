
/*
Створіть інпут, який при втраті (подія blur) виводити в сусідньому квадрат числа, який був введений у інпут

1. Створити інпут у верстці
2. Сторити дів у верстці
3. Потім витягти на div та input посилання через querySelector (getElement....)
4. На інпут повісити подію, тип події - blur, колис станеться ця подія, треба в сусідньому діві вивести квадрат числа який був введений в інпут

Проверка на value (input - число!)
Пам'ятайте, value в input'і завжди буде рядком (перевторити типи!)
*/

const input = document.querySelector('input');

function blurHandler(event) {
    const value = event.target.value;
    const number = Number(value);
    const div = document.querySelector('#root');

    if(Number.isNaN(number)) {
        div.textContent = 'Input must be a number';
        return;
    }

    div.textContent = number * number;
}

input.addEventListener('blur', blurHandler);