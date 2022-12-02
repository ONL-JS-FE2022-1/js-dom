// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

/*

Задача: зробити погодний віджет
Алгоритм вирішення:

+1. Зробити верстку елементів, які отримують від користувача дані про місто
+2. Отримати дані і обробити їх (підготовувати до запиту на сервер)
+3. Зробити запит на сервер і отримати відповідь.
+4. Обробити дані відповіді та відобразити користувачу. 

*/

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
  const selectValue = target.previousElementSibling.value;
  requestAPI(selectValue)
}

function requestAPI(city) {
  // готуємо URL
  const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((response) => {return response.json()})
  .then((data) => {displayWeather(data)})
}

/*
      <article class="weather">
        <p>City: Kyiv</p>
        <p>Temperature: 0</p>
        <p>Pressure: 999</p>
        <p>Weather description: overcast clouds</p>
      </article>
*/

function displayWeather(weatherData) {
  const {name, main: {temp, pressure}, weather} = weatherData; // !!!!!

  const article = document.createElement('article');

  const city = document.createElement('p');
  const temperature = document.createElement('p');
  const press = document.createElement('p');
  const descr = document.createElement('p');

  city.append('City: ', name);
  temperature.append('Temperature: ', temp);
  press.append('Pressure: ', pressure);
  descr.append('Weather description: ', weather[0].description);

  article.append(city, temperature, press, descr);

  const section = document.querySelector('.wrapper');
  section.append(article);
}


fetch("https://api.monobank.ua/bank/currency")
.then((response) => {return response.json()})
.then((data) => {console.log(data)})