// 1. Створити новий елемент
const div = document.createElement('div');
div.append('Hello, JS!');
console.log(div);
// 2. Приєднати елемент до будь-якого існуючого на сторінці батьківського елемента
const body = document.body;
console.log(body);
body.append(div);


//
const div2 = document.createElement('div');
div2.append('test');
div.append(div2);