let currentHour = document.querySelector("#hour");
let currentMinutes = document.querySelector("#minutes");

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();

if (hour < 10) {
  hour = `0${minutes}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDay = document.querySelector("#wed");
let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
console.log(day);
currentDay.innerHTML = `${day}`;

console.log(hour);
console.log(minutes);
currentHour.innerHTML = `${hour}:${minutes}`;

let units = "metric";

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#status").innerHTML = response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "c62ebe2801487103359e5c2553337660";
  let city = document.querySelector("#input-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function convertToCelsius(event) {
  event.preventDefault();
  units = "metric";
  search(event);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  units = "imperial";
  search(event);
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", convertToCelsius);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFahrenheit);

function changeAnimation(event) {
  event.preventDefault();
}
