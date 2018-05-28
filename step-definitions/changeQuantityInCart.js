let app = require("../app.js");
let ShoppingCart = require("../js/classes/shopping-cart.js");
let Product = require("../js/classes/product.js");

module.exports = function() {
  let cart;
  let addedProduct;
  let anotherProduct;
  let secondProduct;
  let thirdProduct;
  let error;
  let quantity;
  let newQuantity;
  let index;

  this.Given(/^that the quantity of a product is seven$/, function(callback) {
    cart = new ShoppingCart();
    addedProduct = app.products[0];
    quantity = 7;

    cart.add(addedProduct, quantity);

    callback();
  });

  this.When(/^you reduce the quantity by two$/, function(callback) {
    newQuantity = 5;
    cart.changeQuantity(addedProduct, newQuantity);
    callback();
  });

  this.Then(/^the quantity of the product should be five$/, function(callback) {
    index = cart.findProductInCart(addedProduct);
    assert(index !== -1, "The product is no longer in the shopping cart");

    assert(
      cart.thingsToBuy[index].quantity === 5,
      "The quantity was not updated correctly"
    );

    callback();
  });

  this.Given(/^that the quantity of a product is four$/, function(callback) {
    cart = new ShoppingCart();
    addedProduct = app.products[10];
    quantity = 4;

    cart.add(addedProduct, quantity);
    callback();
  });

  this.When(/^you add two to the quantity of a product$/, function(callback) {
    newQuantity = 6;
    cart.changeQuantity(addedProduct, newQuantity);
    callback();
  });

  this.Then(
    /^the quantity of the product should have changed to six$/,
    function(callback) {
      index = cart.findProductInCart(addedProduct);
      assert(index !== -1, "The product is no longer in the shopping cart");

      assert(
        cart.thingsToBuy[index].quantity === 6,
        "The quantity was not updated correctly"
      );

      callback();
    }
  );

  this.Given(/^that the cart has one product$/, function(callback) {
    cart = new ShoppingCart();
    addedProduct = app.products[1];
    quantity = 1;

    cart.add(addedProduct, quantity);
    callback();
  });

  this.When(
    /^you try to change quantity of another product that is not in the cart$/,
    function(callback) {
      anotherProduct = app.products[10];

      try {
        cart.changeQuantity(anotherProduct, 5);
      } catch (myError) {
        error = myError;
      }

      callback();
    }
  );

  this.Then(/^you should get an error$/, function(callback) {
    assert(
      error !== undefined,
      "Didn't get an error when trying to change quantity of a product that is not in the shopping cart."
    );

    callback();
  });

  this.Given(
    /^that the cart has three diffrent products each with a quantity of one$/,
    function(callback) {
      cart = new ShoppingCart();
      addedProduct = app.products[0];
      secondProduct = app.products[5];
      thirdProduct = app.products[8];
      quantity = 1;

      cart.add(addedProduct, quantity);
      cart.add(secondProduct, quantity);
      cart.add(thirdProduct, quantity);
      callback();
    }
  );

  this.When(/^you change quantity of one of the products to ten$/, function(
    callback
  ) {
    newQuantity = 10;
    cart.changeQuantity(addedProduct, newQuantity);
    callback();
  });

  this.Then(/^the changed product should have a quantity of ten$/, function(
    callback
  ) {
    index = cart.findProductInCart(addedProduct);
    assert(index !== -1, "The product is no longer in the shopping cart");

    assert(
      cart.thingsToBuy[index].quantity === 10,
      "The quantity was not updated correctly"
    );
    callback();
  });

  this.Then(
    /^the other two products should still have a quantity of one each$/,
    function(callback) {
      index = cart.findProductInCart(secondProduct);
      assert(index !== -1, "The product is no longer in the shopping cart");
      assert(
        cart.thingsToBuy[index].quantity === 1,
        "The quantity was changed"
      );

      index = cart.findProductInCart(thirdProduct);
      assert(index !== -1, "The product is no longer in the shopping cart");
      assert(
        cart.thingsToBuy[index].quantity === 1,
        "The quantity was changed"
      );

      callback();
    }
  );
};
