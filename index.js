const regexp = /^Test$/; // шукаємо слово "Тест"
/^[A-Za-z]{2,5}$/; // шукаємо слово з 2-5 літер (великих чи маленьких)
/^[A-Za-z0-9\_\.]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+$/ // email

const str1 = 'hello';
const str2 = new String('hello');

// RegExp

const testString = 'sunnyday23@gmail.com';

const reg1 = /^[A-Za-z]{2,5}$/;
console.log(reg1)
const reg2 = new RegExp('^[A-Za-z0-9\_\.]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+$');
console.log(reg2);