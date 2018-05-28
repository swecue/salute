let app = require("../app.js");
let ShoppingCart = require("../js/classes/shopping-cart.js");
let Product = require("../js/classes/product.js");

module.exports = function() {
  let cart;
  let aProduct;
  let anotherProduct;
  let firstProduct;
  let secondProduct;
  let thirdProduct;
  let error;
  let quantity = 1;
  // Since the main goal of this test senario is not testing quantity, the quantity is given a global value of 1.

  this.Given(
    /^you have a product with a quantity of "([^"]*)" in the shopping cart$/,
    function(arg1, callback) {
      // Create a shopping cart
      cart = new ShoppingCart();

      // Choose any product to use
      aProduct = app.products[0];

      // Set up the cart to contain the product with a quantity (quantity is 1 i first scenario and 999 in second scenario).
      cart.add(aProduct, arg1);
      callback();
    }
  );

  this.When(/^you remove the product from the shopping cart$/, function(
    callback
  ) {
    // Use the remove method to remove the product from cart
    cart.remove(aProduct);
    callback();
  });

  this.Then(
    /^the shopping cart will not contain the removed product$/,
    function(callback) {
      // Making sure the cart does no longer contain the removed product
      // Since we know that the metod findProductInCart return -1 if it can´t find the product we compare the result
      // with the value -1. If that is false we get an assertion error saying "The product was not removed from the
      // shopping cart"
      assert(
        cart.findProductInCart(aProduct) === -1,
        "The product was not removed from the shopping cart"
      );
      callback();
    }
  );

  this.Given(
    /^you have a number of different products in the shopping cart$/,
    function(callback) {
      // Create a shopping cart
      cart = new ShoppingCart();

      // Choose different products to use, in this case three different
      firstProduct = app.products[0];
      secondProduct = app.products[1];
      thirdProduct = app.products[2];

      // Set up the cart to contain the products (since quantity is not the goal to test, we use the global variabel)
      cart.add(firstProduct, quantity);
      cart.add(secondProduct, quantity);
      cart.add(thirdProduct, quantity);

      callback();
    }
  );

  this.When(/^you remove one of the products from the shopping cart$/, function(
    callback
  ) {
    // Use the remove method to remove one product from cart
    cart.remove(secondProduct);

    callback();
  });

  this.Then(
    /^the shopping cart will only contain the products that was not removed$/,
    function(callback) {
      // First check if the removed product is removed from cart. Since we know that the metod findProductInCart
      // return -1 if it can´t find the product, we compare the result with the value -1.
      // If that is false we get an assertion error saying "The product was not removed from the
      // shopping cart"
      assert(
        cart.findProductInCart(secondProduct) === -1,
        "The product was not removed from the shopping cart"
      );

      // Then we check if the two other products are still in the cart like they should be.
      // Use the same method but this time the result should not equal -1.
      // If it would be equal to -1 it means the product is not in the cart and we get an
      // assertion error saying "The product is not in the shopping cart"

      assert(
        cart.findProductInCart(firstProduct) !== -1,
        "The product is not in the shopping cart"
      );

      assert(
        cart.findProductInCart(thirdProduct) !== -1,
        "The product is not in the shopping cart"
      );

      callback();
    }
  );

  this.Given(/^you have a shopping cart with a product$/, function(callback) {
    // Create a shopping cart
    cart = new ShoppingCart();

    // Choose any product to use
    aProduct = app.products[0];

    // Set up the cart to contain the product (since quantity is not the goal to test, we use the global variabel)
    cart.add(aProduct, quantity);

    callback();
  });

  this.When(
    /^you try to remove another product that is not in the shopping cart$/,
    function(callback) {
      // Choose a different product then the one you added and remove that product.
      anotherProduct = app.products[1];

      // Try catch is used to catch the error (er). The error (er) is saved in a variabel named error.
      try {
        cart.remove(anotherProduct);
      } catch (er) {
        error = er;
      }

      callback();
    }
  );

  this.Then(/^you should get a runtime error$/, function(callback) {
    // Since the variabel error is global we can use it here. Assert that the error is not undefined.
    // If error is equal to undefined we get an assertion error saying:
    // "Didn't get an error when trying to remove a product that is not in the shopping cart."
    assert(
      error !== undefined,
      "Didn't get an error when trying to remove a product that is not in the shopping cart."
    );
    callback();
  });
};
