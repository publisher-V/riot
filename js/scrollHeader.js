const header = document.querySelector("header");
const resHeader = document.querySelector("res-header");

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    header.classList.add("change");
    resHeader.classList.add("change");
  } else {
    header.classList.remove("change");
    resHeader.classList.remove("change");
  }
});