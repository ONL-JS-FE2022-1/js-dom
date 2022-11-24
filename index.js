const button = document.querySelector('button');

function clickHandler({target}) {
    target.disabled = true;
}

button.addEventListener('click', clickHandler);