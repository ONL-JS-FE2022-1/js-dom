/*
Створити картинку і вставити її в div
*/

const div = document.createElement('div');
const img = document.createElement('img');
img.setAttribute('src', './images/7f041fc3ecd15391c19bf91c2c16ba32.jpg');
div.append(img);

document.body.append(div);