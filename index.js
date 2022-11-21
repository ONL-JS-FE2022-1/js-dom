// console.log(this);

// alert(); // window.alert()

// console.dir(document);

function getAlert(event) {
    console.log(event);
    event.target.removeEventListener('click', getAlert);
}

const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert);