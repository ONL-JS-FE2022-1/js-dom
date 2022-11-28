const root = document.querySelector('#root');

function createCard(user) {
    /* TODO:
    1+. Refactor to short code
    2+. Create image placeholder
    3. When image is loadeng, show placeholder
    */

    const imageWrapper = createImageWrapper(user);

    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    const p = createElement('p', {classNames: ['description']}, user.description);
    
    return createElement('article', {classNames: ['card-wrapper']}, imageWrapper, h2, p);
}

const cardArray = data.map((user) => createCard(user));


root.append(...cardArray);

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
  imgWrapper.setAttribute('id', `wrapper${user.id}`);
  const img = createUserImage(user);
  return imgWrapper;
}

function createUserImage(user) {
  const img = document.createElement('img');
  img.classList.add('card-image');
  img.setAttribute('src', user.profilePicture);
  img.setAttribute('alt', user.name);
  img.dataset.id = user.id;
  
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