const apiKey = "d5abfdf717f477258b4dc70ba2b383d5";

const getApiData = (cityName) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&lang=pt_br&units=metric`;

const getWeather = async (cityName) => {
  try {
    const response = await fetch(getApiData(cityName));
 
    if (!response.ok) {
      throw new Error("Não foi possível obter dados");
    }
    const data = await response.json();
    return data; 
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
}

