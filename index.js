const telephone = {
  name: "Samsung",
  avatar: "./",
  description: "BlaBlaBla",
  price: "100$",
};

const telephoneArray = [
  {
    name: "Samsung",
    avatar: "./",
    description: "BlaBlaBla",
    price: "100$",
  },
  {
    name: "Nokia",
    avatar: "./",
    description: "BlaBlaBla",
    price: "50$",
  },
  {
    name: "Huawei",
    avatar: "./",
    description: "BlaBlaBla",
    price: "200$",
  },
  {
    name: "iPhone",
    avatar: "./",
    description: "BlaBlaBla",
    price: "100500$",
  },
];

// console.log(`Телефон ${telephone.name} коштує ${telephone.price}`);

// for(const tel of telephoneArray) {
//     console.log(`Телефон ${tel.name} коштує ${tel.price}`);
// }


// СТРУКТУРА


/* <article class="card-wrapper">
    <img
        class="card-image"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="John"
    />
    <h2 class="username">John</h2>
    <p class="description">fafewqrewrqwer2322revzd</p>
</article> */


// СТРУКТУРА

const root = document.querySelector('#root');

function createCard(user) {
    /* TODO:
    1. Refactor to short code
    2. Create image placeholder
    3. When image is loadeng, show placeholder
    */
    const article = document.createElement('article');
    article.classList.add('card-wrapper');

    const img = document.createElement('img');
    img.classList.add('card-image');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);

    const h2 = document.createElement('h2');
    h2.classList.add('username');
    h2.append(user.name);

    const p = document.createElement('p');
    p.classList.add('description');
    p.append(user.description);

    article.append(img, h2, p);
    
    return article;
}

const cardArray = data.map((user) => createCard(user));


root.append(...cardArray);