const root = document.querySelector('#root');

function createCard(user) {
    /* TODO:
    1+. Refactor to short code
    2. Create image placeholder
    3. When image is loadeng, show placeholder
    */

    const img = document.createElement('img');
    img.classList.add('card-image');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);

    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    const p = createElement('p', {classNames: ['description']}, user.description);
    
    return createElement('article', {classNames: ['card-wrapper']}, img, h2, p);
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