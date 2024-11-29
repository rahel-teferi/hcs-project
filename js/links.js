const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=2761fe02cac80b591fc1acc1dfb15375&units=metric&q=Berlin";

const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=2761fe02cac80b591fc1acc1dfb15375&units=metric";

let weatherEl = document.querySelector(".weather");
let weatherForcastEl = document.querySelector(".weatherForcast");
currentWeather();

async function currentWeather() {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw Error("error");
    } else {
      let data = await response.json();

      let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

      weatherEl.innerHTML = `<p>Current weather in Berlin</p><img src=${iconLink}>${data.main.temp} &#8451<p>Humidity ${data.main.humidity} and ${data.weather[0].description}</p>`;
    }
  } catch (error) {
    alert(error);
  }
}

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       return Promise.reject("the url does not exist");
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     weatherEl.innerHTML = `<p>Current weather in Berlin</p><img src=${iconLink}>${data.main.temp} &#8451<p>Humidity ${data.main.humidity} and ${data.weather[0].description}</p>`;
//   });
weatherForcast();
async function weatherForcast() {
  let response = await fetch(url2);
  try {
    if (!response.ok) {
      throw Error("url does not exist");
    } else {
      let data = await response.json();
      let iconLink = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

      weatherForcastEl.innerHTML += `
    <p>${data.list[0].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[0].main.temp}&#8451</p>
    <p>${data.list[8].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[8].main.temp}&#8451</p>
    <p>${data.list[16].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[16].main.temp}&#8451</p>
    <p>${data.list[24].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[24].main.temp}&#8451</p>
    <p>${data.list[32].dt_txt} - <img src="${iconLink}"> Temp - ${data.list[32].main.temp}&#8451</p>`;
    }
  } catch (error) {
    // console.log(error);
  }
}
let closeBtn = document.querySelector(".modal span");
let images = document.querySelectorAll(".gallery__images img");
let modalEl = document.querySelector(".modal img");

for (let image of images) {
  image.addEventListener("click", function () {
    modalEl.setAttribute("src", image.getAttribute("src"));
    modalEl.parentElement.style.display = "flex";
  });
}
closeBtn.addEventListener("click", function () {
  modalEl.parentElement.style.display = "none";
});
