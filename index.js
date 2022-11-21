// console.log(this);

// alert(); // window.alert()

// console.dir(document);

function getAlert(event) {
    const btn = event.target;
    btn.style.display = 'none';
}

const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert);

/*
Зробіть кнопку одноразовою.
Коли натискаємо на кнопку, властивість display у кнопки повинна стати none
*/