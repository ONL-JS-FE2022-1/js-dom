console.log(this);

// alert(); // window.alert()

console.dir(document);

function getAlert() {
    alert('Hello, user!');
}

const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert);

/*
Зробіть кнопку, додайте їй id, напишіть функцію, яка виводить в консоль "привіт"
навісити обробку події наведення миші на цю кнопку
*/

function consoleHello() {
    console.log('Hello');
}

const secondBtn = document.getElementById('second-btn');
secondBtn.addEventListener('mouseenter', consoleHello);