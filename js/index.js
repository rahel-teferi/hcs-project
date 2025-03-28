function openNav() {
  let sideNavEl = document.querySelector(".sideNav");
  sideNavEl.style.display = "flex";
}

function closeNav() {
  let sideNavEl = document.querySelector(".sideNav");
  sideNavEl.style.display = "none";
}

let catagoryEl = document.querySelector(".catagory");

function openCatagory() {
  if (catagoryEl.style.display == "block") {
    catagoryEl.style.display = "none";
  } else {
    catagoryEl.style.display = "block";
  }
}
