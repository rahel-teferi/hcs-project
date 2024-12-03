let weatherEl = document.querySelector(".weather");
let weatherForcastEl = document.querySelector(".weatherForcast");
const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=2761fe02cac80b591fc1acc1dfb15375&units=metric";
const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?appid=2761fe02cac80b591fc1acc1dfb15375&units=metric";

let cityNames = ["Berlin", "New York", "Republic of Malta", "Addis Ababa"];
const randomCity = Math.ceil(Math.random() * cityNames.length - 1);
let city = cityNames[randomCity];

currentWeather(city);

async function currentWeather(city) {
  try {
    let response = await fetch(`${url}&q=${city}`);
    if (!response.ok) {
      throw Error("error");
    }
    let data = await response.json();

    let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherEl.innerHTML += `${city}<img src=${iconLink}>${data.main.temp} &#8451 ${data.weather[0].description}`;
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
    let fiveDaysWeather = "";
    for (let i = 0; i < numDaysToShow; i++) {
      let forcastIndex = i * 8;

      let iconLink = `https://openweathermap.org/img/w/${data.list[forcastIndex].weather[0].icon}.png`;
      let dataDay = new Date(data.list[forcastIndex].dt * 1000);
      newDay = dataDay.toDateString();

      fiveDaysWeather += `<span> ${newDay}
    <img src="${iconLink}">${data.list[forcastIndex].main.temp}&#8451</span>`;
      // console.log(fiveDaysWeather);
    }
    weatherForcastEl.innerHTML = fiveDaysWeather;
  } catch (error) {
    alert(error);
  }
}
//galery image modal
let closeBtn = document.querySelector(".close");
let images = document.querySelectorAll(".gallery__images img");
let modalImg = document.querySelector(".gallery-modal img");
let altImg = document.querySelector(".img-alt");
let modalEl = document.querySelector(".gallery-modal");

for (let image of images) {
  image.addEventListener("click", function () {
    modalImg.setAttribute("src", image.getAttribute("src"));
    modalImg.setAttribute("alt", image.getAttribute("alt"));
    altImg.textContent = modalImg.getAttribute("alt");
    modalEl.showModal();
  });
}

closeBtn.addEventListener("click", function () {
  modalEl.close();
});
