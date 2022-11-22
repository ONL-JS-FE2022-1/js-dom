const collection = document.getElementsByClassName('paragraph');
console.log(collection);

for (const p of collection) {
    p.style.color = 'green';
}

const btns = document.getElementsByTagName('button');
console.log(btns);

const arr = [...btns];
console.log(arr);

function hello() {
    console.log('Hello, user!')
}

// variant 1
// btns[0].addEventListener('click', hello);
// btns[1].addEventListener('click', hello);
// btns[2].addEventListener('click', hello);

// variant 2
for(const btn of btns) {
    btn.addEventListener('click', hello);
}