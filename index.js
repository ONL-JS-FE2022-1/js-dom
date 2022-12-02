const p = new Promise(function(resolve, reject) { // status: pending
  setTimeout(() => {
    resolve('It time'); // время пришло!!!
  }, 15000)
})

p.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
