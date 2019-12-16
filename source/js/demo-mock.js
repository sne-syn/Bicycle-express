"use strict";

(function () {

var PHOTOS = ['../img/product-demo-1.png', '../img/product-demo-2.png', '../img/product-demo-3.png'];
var BRAND_NAMES = ['Felt', 'Raleigh', 'Raleigh'];
var MODELS = ['Decree FRD', 'Port Townsend', 'Redux 2'];
var PRICES = ['8.999.00', '759.99', '679.99'];

var cardQuantity = 3;
var cards = [];

var generateProductCard = function (cardQuantity, array) {
  for (var i = 0; i < cardQuantity; i++) {
    array.push({
      'photo': PHOTOS[i],
      'brand': BRAND_NAMES[i],
      'model': MODELS[i],
      'price': PRICES[i]
    });
  }
};

generateProductCard(cardQuantity, cards);

var productBlock = document.querySelector('.product');
var productTemplate = document.querySelector('#demo-product').content
.querySelector('.product__item');

var addCardsImg = function (photo) {
  var productImg= productBlock.querySelector('.product__img');
  productImg.innerHTML = '';
    var imgTag = document.createElement('img');
    imgTag.classList.add('product__img');
    imgTag.src = photo;
    imgTag.width = '282';
    imgTag.height = '178';
    imgTag.alt = 'Product image';
    productImg.appendChild(imgTag);
};
  var renderProductCard = function (obj) {
    var productCard = productTemplate.cloneNode(true);
    productBlock.insertBefore(productCard, null);

    var brand = productCard.querySelector('.product__brand');
    brand.textContent = obj.brand;

    var model = productCard.querySelector('.product__name');
    model.textContent = obj.model;

    var price = productCard.querySelector('.product__price');
    price.textContent = obj.price;

    addCardsImg(obj.photo, productCard);
  };

  renderProductCard(cards[0]);

})();
