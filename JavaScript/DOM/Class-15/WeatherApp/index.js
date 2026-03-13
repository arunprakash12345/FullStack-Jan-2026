const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateTimeField = document.querySelector(".time_location span");
const imageField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const toggleBtn = document.querySelector(".toggleTemp");
const locationBtn = document.querySelector(".currentLocation");
const historyContainer = document.querySelector(".history");
const loader = document.querySelector(".loading");
const isCelsius = true;

const updateWeather = (
  cityName,
  temperature,
  time,
  currentCondition,
  conditionLogo,
) => {
  cityField.innerText = cityName;
  temperatureField.innerText = temperature + " C";
  dateTimeField.innerText = time;
  weatherField.innerText = currentCondition;
  imageField.src = conditionLogo;
};

const fetchPastData = async (value) => {
  try {
    historyContainer.innerHTML = "";
    loader.innerText = "Loading....";
    for (let i = 1; i <= 3; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate = date.toISOString().split("T")[0];
      const endPoint = `http://api.weatherapi.com/v1/history.json?key=28110fb8554942b289d20012261103&q=${value}&dt=${formattedDate}`;
      const response = await fetch(endPoint);
      const data = await response.json();
      const temperate = data.forecast.forecastday[0].day.avgtemp_c;
      const condition = data.forecast.forecastday[0].day.condition.text;
      const div = document.createElement("div");
      div.innerHTML = `
      <p>${formattedDate}</p>
      <p>${temperate}</p>
     <p>${condition}</p>
      `;
      historyContainer.appendChild(div);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  } finally {
    loader.innerText = "";
  }
};

const fetchData = async (value) => {
  try {
    // actual code
    loader.innerText = "Loading....";
    const endPoint = `
    http://api.weatherapi.com/v1/current.json?key=28110fb8554942b289d20012261103&q=${value}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const currentTemp = data.current.temp_c;
    const locationName = data.location.name;
    const localTime = data.location.localtime;
    const currentCondition = data.current.condition.text;
    const conditionLogo = data.current.condition.icon;

    updateWeather(
      locationName,
      currentTemp,
      localTime,
      currentCondition,
      conditionLogo,
    );
  } catch (error) {
    // error
    console.log(error);
    alert(error);
  } finally {
    // execute always
    loader.innerText = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = searchField.value;
  if (value.length === 0) {
    alert("Enter the City Name");
    return;
  }
  fetchData(value);
  fetchPastData(value);
});

toggleBtn.addEventListener("click", () => {
  const temperature = temperatureField.innerText.split(" ");
  const temp = temperature[0];
  const isCelsius = temperature[1];
  console.log(temperature);
  if (isCelsius === "C") {
    const f = (parseInt(temp) * 9) / 5 + 32;
    temperatureField.innerText = f.toFixed(2) + " F";
  } else {
    const c = ((parseInt(temp) - 32) * 5) / 9;
    temperatureField.innerText = c.toFixed(2) + " C";
  }
});

locationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position?.coords?.latitude;
    const long = position?.coords?.longitude;
    const location = `${lat},${long}`;
    fetchData(location);
    fetchPastData(location);
  });
});

fetchData("Mumbai");
fetchPastData("Mumbai");
