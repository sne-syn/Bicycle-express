'use strict';

(function () {
  var buttonMenu = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav--closed');
  var menu = document.querySelector('.menu--closed');


  buttonMenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    nav.classList.toggle('nav--opened');
    menu.classList.toggle('menu--opened');
  });
})();
