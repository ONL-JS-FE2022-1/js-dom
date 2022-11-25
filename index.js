/*
Дан section, на якій треба клацати мишею
Дан div, який має переміститись на точку, в яку клацнули мишею
*/

const field = document.querySelector('#game-field');
const box = document.querySelector('#box');
const divCounter = document.querySelector('#counter');

let counter = 0;

field.addEventListener('click', clickHandler, {capture: true});

function clickHandler(event) {
    const {currentTarget, target, currentTarget:{children: {box}}} = event;
    if(currentTarget !== target) {
        updateCounter();
    }

    box.style.top = `${randomCoordinates(currentTarget.offsetHeight)}px`;
    box.style.left = `${randomCoordinates(currentTarget.offsetWidth)}px`;
}

function updateCounter() {
    divCounter.textContent = ++counter;
}

function randomCoordinates(max) {
    return Math.floor(Math.random() * max);
}