'use strict';

(function () {

  var popup = document.querySelector('.modal');
  var overlay = document.querySelector('.modal__overlay');
  var subscribeButton = document.querySelector('.subscribe-form__btn');
  var closeButton = popup.querySelector('.modal__close');

  var openPopup = function () {
    popup.classList.add('modal--show');
    document.addEventListener('keydown', popupEscHandler);
  };

  var closePopup = function () {
    popup.classList.remove('modal--show');
    document.activeElement.blur();
    document.removeEventListener('keydown', popupEscHandler);
  };

  subscribeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });

  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
  });

  var popupEscHandler = function (evt) {
    window.util.keyaction.addEscEvent(evt,
      closePopup);
  };

  var closeButtonClickHandler = function (evt) {
    evt.preventDefault();
    closePopup();
  };

  subscribeButton.addEventListener('click', function () {
    openPopup();
  });

  subscribeButton.addEventListener('keydown', function (evt) {
    window.util.keyaction.addEnterEvent(evt, openPopup);
  });

  closeButton.addEventListener('click', closeButtonClickHandler);
  overlay.addEventListener('click', closePopup);

})();
