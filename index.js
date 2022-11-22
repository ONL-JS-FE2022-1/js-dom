const paragraphCollection = document.querySelectorAll('p:nth-child(even)');
console.log(paragraphCollection);

for(const par of paragraphCollection) {
    par.style.color = 'red';
}