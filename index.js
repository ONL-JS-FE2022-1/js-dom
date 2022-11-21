// console.log(this);

// alert(); // window.alert()

// console.dir(document);

// function getAlert(event) {
//     console.log(event);
//     event.target.removeEventListener('click', getAlert);
// }

// const buttonElement = document.getElementById('btn');
// buttonElement.addEventListener('click', (event) => {
//     console.log(event);
// });



/*
Напишіть функцію, яка вітає користувача за його ім'ям.
Ім'я користувача брати з інпуту форми.
*/

const form = document.getElementById('hello-form');
form.addEventListener('submit', helloUser)

function helloUser(event) {
    event.preventDefault();
    const form = event.target;
    const value = form[0].value;
    console.log(`Hello, ${value ? value : 'Anonym'}`);
}