"use strict";

(function () {

  var PHOTOS = ['../img/product-demo-1.png', '../img/product-demo-2.png', '../img/product-demo-3.png', '../img/product-demo-4.png', '../img/product-demo-5.png', '../img/product-demo-6.png', '../img/product-demo-7.png', '../img/product-demo-8.png', '../img/product-demo-9.png'];
  var BRAND_NAMES = ['Felt', 'Raleigh', 'Raleigh', 'Raleigh', 'Felt', 'Raleigh', 'Unknown', 'Unknown', 'Felt'];
  var MODELS = ['Decree FRD', 'Port Townsend', 'Redux 2', 'Gala', 'Vezza Cruz', 'Tamland - 2', 'Bass-3 Complete', 'Type - 1', 'Decree 5'];
  var PRICES = [8999.00, 759.99, 679.99, 449.99, 499.00, 2399.99, 599.99, 699.99, 3499.00];

  var cardQuantity = 9;
  var cards = [];

  var createProductCard = function () {
    for (var i = 0; i < cardQuantity; i++) {
      cards.push({
        'photo': PHOTOS[i],
        'brand': BRAND_NAMES[i],
        'model': MODELS[i],
        'price': '$ ' + PRICES[i]
      });
    }
  };

  createProductCard();

  var renderProductCard = function (cards) {
    var productBlock = document.querySelector('.product');
    productBlock.innerHTML = '';

    cards.forEach(function (item) {
      var productTemplate = document.querySelector('#demo-product').content.querySelector('.product__item');
      var productCard = productTemplate.cloneNode(true);
      productBlock.insertBefore(productCard, null);
      var image = productCard.querySelector('.product__img');
      image.src = item.photo;

      var brand = productCard.querySelector('.product__brand');
      brand.textContent = item.brand;

      var model = productCard.querySelector('.product__name');
      model.textContent = item.model;

      var price = productCard.querySelector('.product__price');
      price.textContent = item.price;
    });
  };
  renderProductCard(cards);

})();
