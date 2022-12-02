function loadImage(src) {
  const img = document.createElement('img');
  img.setAttribute('src', src);

  return new Promise(function(resolve, reject) {
    img.addEventListener('load', () => {
      resolve(img);
    });

    img.addEventListener('error', () => {
      const error = new Error('Image can`t be loaded');
      reject(error);
    });
  })
}

loadImage('https://klike.net/uploads/posts/2020-04/1587719791_1.jpg')
.then((img) => {
  document.body.append(img);
})
.catch((err) => {
  console.log(err);
})