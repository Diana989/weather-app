function ShowWeatherParameters(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}
function search(city) {
  let apiKey = "cb1dd2cddc779c76de3ed1ecf21ae41d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(ShowWeatherParameters);
}
function changeThecity(event) {
  event.preventDefault();
  let city = document.querySelector("#change-city").value;
  search(city);
}

function searchLocation(position) {
  let apiKey = "cb1dd2cddc779c76de3ed1ecf21ae41d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(ShowWeatherParameters);
}

function getLocationWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let form = document.querySelector("form");
form.addEventListener("submit", changeThecity);

let currentLocationButton = document.querySelector("#your-location-button");
currentLocationButton.addEventListener("click", getLocationWeather);

let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${hours}:${minutes}`;

function convertToFahrenheit(temp) {
  temp.preventDefault();
  let todayTemp = document.querySelector("#temperature");
  todayTemp.innerHTML = 67;
}
function convertToCelsius(temp) {
  temp.preventDefault();
  let todayTemp = document.querySelector("#temperature");
  todayTemp.innerHTML = 18;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFahrenheit);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", convertToCelsius);
