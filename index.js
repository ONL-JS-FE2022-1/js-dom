// const event = new Event('click');
// console.log(event);

const btn = document.querySelector('button');
const div = document.querySelector('#root');

const eventHandler = (event) => {
    if(event.currentTarget === document.body) {
        event.stopPropagation();
        console.log('Ніяких тобі кнопок');
    }
}
// console.group();
btn.addEventListener('click', eventHandler, () => {
    console.log('hello, button');
});
// div.addEventListener('click', eventHandler, {capture: true});
document.body.addEventListener('click', eventHandler, {capture: true});
// window.addEventListener('click', eventHandler, {capture: true});
console.groupEnd();

// const event = new MouseEvent('click');
// btn.dispatchEvent(event);

/*

1. Фаза занурення. Подія стається на рівні OC. 
OC передає її браузеру (Window), той передає document -> body -> .... -> елемент, на якому сталася подія

2. Фаза цілі. Подія досягла елемента, елемент - це таргет

3. Фаза сплиття. Подія починає спливати у зворотньому напрямку, тобто від елемента до браузера.

*/