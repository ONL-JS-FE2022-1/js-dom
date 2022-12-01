const p = fetch("./user.json")
  .then((response) => {
    // 0 && 1 (JSON)
    return response.json();
  })
  .then((data) => {
    // JS OBJECT
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR HAVE HAPPENNED: " + err);
  })
  .finally(() => {
    console.log("FINALLY question closed");
  });
