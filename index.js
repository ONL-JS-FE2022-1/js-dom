function createDiv() {
    const div = document.createElement('div'); // 1. Створюємо елемент у пам'яті
    div.classList.add('box');
    div.append('Hello text');
    document.body.append(div); // 2. Приєднуємо елемент до батьківського елементу
}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv);