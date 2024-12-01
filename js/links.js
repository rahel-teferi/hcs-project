let cityNames = ["Berlin", "New York", "malta", "Addis Abeba"];
const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=2761fe02cac80b591fc1acc1dfb15375&units=metric";

const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?appid=2761fe02cac80b591fc1acc1dfb15375&units=metric";

let weatherEl = document.querySelector(".weather");
let weatherForcastEl = document.querySelector(".weatherForcast");
const randomCity = Math.ceil(Math.random() * cityNames.length - 1);
let city = cityNames[randomCity];

currentWeather();

async function currentWeather() {
  try {
    let response = await fetch(`${url}&q=${city}`);
    if (!response.ok) {
      throw Error("error");
    }
    let data = await response.json();

    let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherEl.innerHTML = `${city}<img src=${iconLink}>${data.main.temp} &#8451 ${data.weather[0].description}`;
  } catch (error) {
    alert(error);
  }
}

weatherForcast();
async function weatherForcast() {
  try {
    const response = await fetch(`${url2}&q=${city}`);
    if (!response.ok) {
      throw Error("url does not exist");
    }
    let data = await response.json();
    let numDaysToShow = 5;
    for (let i = 0; i < numDaysToShow; i++) {
      let forcastIndex = i * 8;
      let iconLink = `https://openweathermap.org/img/w/${data.list[forcastIndex].weather[0].icon}.png`;
      let dataDay = new Date(data.list[forcastIndex].dt * 1000);
      newDay = dataDay.toDateString();
      weatherForcastEl.innerHTML += `<span>
    ${newDay}
    <img src="${iconLink}">${data.list[forcastIndex].main.temp}&#8451</span>
   `;
    }
  } catch (error) {
    alert(error);
  }
}

// let closeBtn = document.querySelector(".modal span");
// let images = document.querySelectorAll(".gallery__images img");
// let modalEl = document.querySelector(".modal img");

// for (let image of images) {
//   image.addEventListener("click", function () {
//     modalEl.setAttribute("src", image.getAttribute("src"));
//     modalEl.parentElement.style.display = "flex";
//   });
// }
// closeBtn.addEventListener("click", function () {
//   if () {
//     modalEl.parentElement.style.display = "none";
//   } else {
//   }
// });
