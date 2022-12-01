const p = fetch('./user.json')
  .then((response) => { // 0 && 1 (JSON)
    return response.json();
  })
  .then((data) => { // JS OBJECT
    console.log(data);
  });