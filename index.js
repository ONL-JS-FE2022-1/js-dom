// const event = new Event('click');
// console.log(event);

const btn = document.querySelector('button');

const eventHandler = (event) => {
    console.dir(event.currentTarget); // той, кому належить eventListener
    console.dir(event.target); // той, на кому спрацювала подія
}

window.addEventListener('click', eventHandler);

// const event = new MouseEvent('click');
// btn.dispatchEvent(event);

/*

1. Фаза занурення. Подія стається на рівні OC. 
OC передає її браузеру (Window), той передає document -> body -> .... -> елемент, на якому сталася подія

2. Фаза цілі. Подія досягла елемента, елемент - це таргет

3. Фаза сплиття. Подія починає спливати у зворотньому напрямку, тобто від елемента до браузера.

*/