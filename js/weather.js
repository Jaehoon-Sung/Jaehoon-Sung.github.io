navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGEoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  consolg.log(`${lat}, ${lng}`);
}

function onGeoError() {
  alert("No weather for you.");
}
