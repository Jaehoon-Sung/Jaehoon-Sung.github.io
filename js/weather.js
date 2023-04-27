const API_KEY = "64f1c61deb4fa6913642b8a92cf68a74";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
    });
}

function onGeoError() {
  alert("No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
