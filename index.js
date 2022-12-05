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

function displayWeather(weatherData) {
  const {name, main: {temp, pressure}, weather} = weatherData; // !!!!!
  const [{description}] = weather;

  const article = document.querySelector('#weather-box');
  article.classList.remove('weather');

  appendInfo('city', name);
  appendInfo('temp', temp);
  appendInfo('press', pressure);
  appendInfo('descr', description);
}

function appendInfo(id, info) {
  const element = document.querySelector(`#${id}`);
  element.textContent = info;
}