const form = document.querySelector("form");
const cityNameCard = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const cityHumidity = document.querySelector('[data-js="city-humidity"]');
const cityWind = document.querySelector('[data-js="city-wind"]');
const countryFlag = document.querySelector('[data-js="country-flag"]');
const weatherIcon = document.querySelector('[data-js="time-icon"]');
const weatherDetails = document.querySelector('[data-js="weather-details"]');
const body = document.querySelector("body");

// Function to change Background Image
const changeImageBackground = (cityName) => {
  // Change Image
  body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${cityName}")`;
};

// Function to show city information
const showCityWeatherInfo = async (cityName) => {
  const { name, weather, main, wind, sys } = await getWeather(cityName);

  // Change names
  cityNameCard.textContent = name;
  cityWeather.textContent = weather[0].description;
  cityTemperature.textContent = main.temp.toFixed(1);
  cityHumidity.textContent = main.humidity;
  cityWind.textContent = wind.speed;

  // Change Weather Icon
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${weather[0].icon}.png`
  );

  // Change Flag Country
  countryFlag.setAttribute(
    "src",
    `https://countryflagsapi.com/png/${sys.country}`
  );

  // Remove d-none
  weatherDetails.classList.remove("d-none");
};

// Keeps the last city searched
const showLocalStorage = () => {
  const cityValue = localStorage.getItem("city");

  if (cityValue) {
    showCityWeatherInfo(cityValue);

    changeImageBackground(cityValue);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cityInput = event.target.city.value;

  localStorage.setItem("city", cityInput);

  showCityWeatherInfo(cityInput);

  changeImageBackground(cityInput);

  form.reset();
});

showLocalStorage()
