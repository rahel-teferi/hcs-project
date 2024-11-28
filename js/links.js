const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=2761fe02cac80b591fc1acc1dfb15375&units=metric&q=Berlin";

const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=2761fe02cac80b591fc1acc1dfb15375&units=metric";

const weatherEl = document.querySelector(".iconandtemp");

fetch(url)
  .then((response) => {
    if (!response.ok) {
      return Promise.reject("the url does not exist");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.querySelector(
      ".weather"
    ).innerHTML = `<p>Current weather in Berlin</p><img src=${iconLink}>${data.main.temp} &#8451<p>Humidity ${data.main.humidity} and ${data.weather[0].description}`;
  });

fetch(url2)
  .then((response) => {
    if (!response.ok) {
      return Promise.reject("URL does not found");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    let iconLink = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

    document.querySelector(
      ".weatherForcast"
    ).innerHTML = `<p>Weather Forcast for the coming 5 days in Berlin</p><p>${data.list[0].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[0].main.temp}&#8451</p><p>${data.list[8].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[8].main.temp}&#8451</p>
    <p>${data.list[16].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[16].main.temp}&#8451</p>
    <p>${data.list[24].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[24].main.temp}&#8451</p>
    <p>${data.list[32].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[32].main.temp}&#8451</p>`;
  });
