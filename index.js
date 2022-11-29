const form = document.getElementById('form');
const root = document.getElementById('root');

const state = []; // здесь будут таски

form.addEventListener('submit', addItem);

function addItem(event) {
    event.preventDefault();
    const {target, target: {textInput: {value}}} = event;
    state.push(value);
    const li = createItem(value);
    root.append(li);
    target.reset();
}

function createItem(value) {
    const li = document.createElement('li');
    li.append(value);
    li.classList.add('item');
    return li;
}



/*

+1. В html створити квадрат 50х50
+2. За натисненням на квадрат створити інпут для вводу тексту
+3. За ентером інпут зникає, а в квадраті відображається те, що було введено в інпут

*/

const box = document.querySelector('#box');

box.addEventListener('click', boxClickHandler);

function boxClickHandler(event) {
    const input = document.createElement('input');
    input.addEventListener('keydown', inputKeyHandler);
    const parent = event.target.parentNode;
    parent.append(input);
    box.removeEventListener('click', boxClickHandler);
}

function inputKeyHandler({target, target: {value, previousElementSibling}}) {
    if(event.keyCode === 13) {
        // 2. Передали дані сусідньому елементу (боксу)
        previousElementSibling.textContent = value;
        // 1. знищили сам інпут
        target.remove();
        box.addEventListener('click', boxClickHandler);
    }
}