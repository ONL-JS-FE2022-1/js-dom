/*
1. Зробити верстку елементів
2. Витягти посилання на img-елемент
3. Написати логіку зміни адрес картинок
4. Функції, які змінюють адресу навісити в якості обробників події на кнопки
*/

const imageDB = [
    './images/7f041fc3ecd15391c19bf91c2c16ba32.jpg',
    './images/905911947c2947e6dda5a8d9aa2af088.jpeg',
    './images/1623669235_2.jpg',
    './images/1640239628_1-pofoto-club-p-priroda-ptitsi-tsveti-foto-1.jpg',
    './images/c56b2f4c9309457ee52b4278b0792bda--dandelion-wine-my-childhood.jpg'
]

const [prevBtn, nextBtn] = document.querySelectorAll('.btn');
const img = document.querySelector('.slide-img'); // <<<=== facepalm // const img = document.querySelector('slide-img')

const slider = new Slider(imageDB);

function updateView() {
    img.setAttribute('src', slider.currentSlide);
}

const createSlideBtnHandler = (direction = 'next') => {
    return function () {
        slider.currentIndex = slider[direction === 'next' ? 'nextSlide' : 'prevSlide'];
        updateView();
    }
}

prevBtn.addEventListener('click', createSlideBtnHandler('prev'));
nextBtn.addEventListener('click', createSlideBtnHandler('next'));

updateView();