let myApp = require("../app.js");
let ShoppingCart = require("../shopping-cart.js");
let assert = require("assert");
let Product = require("../product.js");

module.exports = function() {
  let cart;
  let product;
  let quantity;
  let previousQuantity;
  let quantityToAdd;
  let totalQuantity;

  this.Given(
    /^that the quantity\-input box is displayed and filled in with a valid number$/,
    function(callback) {
      cart = new ShoppingCart();
      quantity = 22;
      callback();
    }
  );
  this.When(
    /^the user clicks the Add\-button in the quantity\-dialogue$/,
    function(callback) {
      callback();
    }
  );

  this.Then(
    /^the product will be added to the cart with the correct quantity$/,
    function(callback) {
      cart.add(myApp.products[0], 22);
      callback();
    }
  );
  this.Then(/^the quantity should be equal to our original data$/, function(
    callback
  ) {
    assert(quantity === 22, "quantity didnt add correctly");

    callback();
  });

  this.Given(/^that user has a shopping cart$/, function(callback) {
    cart = new ShoppingCart();
    callback();
  });
  this.When(/^the user add a valid product$/, function(callback) {
    product = myApp.products[5];
    callback();
  });

  this.Then(/^the shopping cart should be update with right product$/, function(
    callback
  ) {
    cart.add(myApp.products[5], 1);

    assert(
      product instanceof Product,
      "Trying to add a non-product to the cart"
    );

    callback();
  });

  this.Then(/^the product should be equal to our original data$/, function(
    callback
  ) {
    assert(
      cart.findProductInCart(myApp.products[5]) !== -1,
      "product is not in the equal to what we added"
    );
    callback();
  });

  this.Given(/^that the cart already contains a product$/, function(callback) {
    previousQuantity = 5;
    cart.add(myApp.products[10], 5);
    callback();
  });

  this.When(
    /^the user add more than one of the same product in the cart$/,
    function(callback) {
      quantityToAdd = 2;
      cart.add(myApp.products[10], 2);
      callback();
      cart.findProductInCart(myApp.products[10]);
    }
  );

  this.Then(/^the new quantity of product should be add to the cart$/, function(
    callback
  ) {
    totalQuantity = 7;

    let index = cart.findProductInCart(myApp.products[10]);

    assert(index !== -1, "product is not in the cart");
    assert(
      cart.thingsToBuy[index].quantity == totalQuantity,
      "product not added correctly to the cart"
    );
    callback();
  });

  this.Given(/^that the shopping cart has already (\d+) products$/, function(
    arg1,
    callback
  ) {
    cart = new ShoppingCart();
    product = myApp.products[10];
    previousQuantity = 999;
    cart.add(myApp.products[10], previousQuantity);

    callback();
  });
  this.When(/^the user add (\d+) pcs beverages to shopping cart$/, function(
    arg1,
    callback
  ) {
    quantityToAdd = 1;
    assert.throws(function() {
      cart.add(myApp.products[10], quantityToAdd);
    });

    callback();
  });

  this.Then(/^should show an error$/, function(callback) {
    // Frontend - check if the error is displayed

    callback();
  });

  // Test for a number of scenarios with non-valid data for quantity
  let quantityToTryWith;
  let currentDataType;
  let error;
  let exampleData = {
    "boolean true": true,
    "boolean false": false,
    array: [],
    object: {},
    null: null,
    undefined: undefined,
    "empty string": ""
  };

  this.Given(
    /^that user filled quantity\-input box with a "([^"]*)"$/,
    function(dataType, callback) {
      currentDataType = dataType;
      error = undefined;
      quantityToTryWith = exampleData[dataType];

      callback();
    }
  );

  this.When(/^try to add quantity to shopping cart$/, function(callback) {
    let cart = new ShoppingCart();
    try {
      cart.add(product, quantityToTryWith);
    } catch (er) {
      error = er;
    }
    callback();
  });

  this.Then(/^we should have an error$/, function(callback) {
    assert(
      error != undefined,
      "Trying to add a product with a non-numeric quantity"
    );
    callback();
  });
};
