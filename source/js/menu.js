var body = document.querySelector("body");
body.classList.remove("no-js");
body.classList.add("js");

var buttonMenu = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav--closed");
var menu = document.querySelector(".menu--closed");

buttonMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("main-nav--opened");
  menu.classList.toggle("menu--opened");
});
