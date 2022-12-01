const p = new Promise(executor);

console.log(p);

function executor(resolve, reject) {
  const number = Math.floor(Math.random() * 15); // генерація цілого випадкового числа вдіапазоні від 0 до 15
  if (number % 2 === 0) {
    // якщо це число кратне 2
    resolve(number);
  } else {
    // якщо число не кратне 2
    const err = new RangeError("ERROR HAPPENED!");
    reject(err);
  }
}

p.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
