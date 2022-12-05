const root = document.querySelector('#root');

function createCard(user) {
    const imageWrapper = createImageWrapper(user);

    const h2 = createElement('h2', {classNames: ['username']}, `${user.name.first} ${user.name.last}`);

    user.dob.date = new Date(user.dob.date).toLocaleString('uk-UA');
    const p = createElement('p', {classNames: ['description']}, user.dob.date);
    
    return createElement('article', {classNames: ['card-wrapper']}, imageWrapper, h2, p);
}

// ПРОФЕТЧИТЬ.

const uploadBtn = document.querySelector('#upload-btn');
uploadBtn.addEventListener('click', ({target}) => {
  fetch(`https://randomuser.me/api/?results=${target.nextElementSibling.value}`)
  .then((response) => {return response.json()})
  .then((data) => {
    const {results} = data;
    const cardArray = results.map((user) => createCard(user)); 
    root.append(...cardArray);
  })
})



// ---------------------

/**
 * 
 * @param {String} type - тип елемента, що треба створити
 * @param {Object} options
 * @param {String[]} options.classNames - список классів 
 * @param  {...Node} children - список дочірніх вузлів
 */

function createElement(type, {classNames}, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}

function createImageWrapper(user) {
  const imgWrapper = createElement('div', {classNames: ['image-wrapper']});
  imgWrapper.setAttribute('id', `wrapper${user.id.value}`);
  imgWrapper.style.backgroundColor = stringToColor(user.name.last);
  const img = createUserImage(user);
  return imgWrapper;
}

function createUserImage(user) {
  const img = document.createElement('img');
  img.classList.add('card-image');
  img.setAttribute('src', user.picture.large);
  img.setAttribute('alt', `${user.name.first} ${user.name.last}`);
  img.dataset.id = user.id.value;
  
  img.addEventListener('load', imageLoadHandler);
  img.addEventListener('error', imageErrorHandler);

  return img;
}

function imageLoadHandler({target}) {
  console.log('image successfully loaded');
  const parrentWrapper = document.getElementById(`wrapper${target.dataset.id}`)
  parrentWrapper.append(target);
}

function imageErrorHandler({target}) {
  target.remove();
  console.log('image loading has error');
}


/* Utils function */
function stringToColor(str) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (var i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}