let assert = require("assert");
let ShoppingCart = require("../js/classes/shopping-cart.js");
let myApp = require("../app.js");
let Product = require("../js/classes/product.js");
let Person = require("../js/classes/person.js");

module.exports = function() {
  //A list of items that we have in cart.
  let aShopingCart, aPerson;
  let productone;
  let producttwo;
  let anotherproduct;
  let allProducts;
  let error;
  let quantity = 1;
  let aProduct;
  let beveragQty = 2;

  //scenario-1//

  this.Given(
    /^that the user has (\d+) products in the shopping-cart$/,
    function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      aShopingCart = new ShoppingCart();

      // Choose any product to use
      aProduct = myApp.products[0];

      // Set up the cart to contain the product (since quantity is not the goal to test, we use the global variabel)
      aShopingCart.add(aProduct, quantity);

      callback();
    }
  );

  this.When(/^the user remove products from shopping-cart$/, function(
    callback
  ) {
    // Write code here that turns the phrase above into concrete actions
    anotherProduct = myApp.products[1];

    // Try catch is used to catch the error (er). The error (er) is saved in a variabel named error.
    try {
      aShopingCart.remove(anotherProduct);
    } catch (er) {
      error = er;
    }

    callback();
  });

  this.Then(/^the shoppingcart displays error message.$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    assert(
      error !== undefined,
      " when trying to remove a product that is not in the shopping cart."
    );
    callback();
  });

  //scenario-2//

  this.Given(/^that the user has products in the shopping-cart$/, function(
    callback
  ) {
    // Write code here that turns the phrase above into concrete actions
    aShopingCart = new ShoppingCart();
    aShopingCart.add(myApp.products[0], 10);
    aShopingCart.add(myApp.products[1], 25);
    console.warn("-----", aShopingCart.thingsToBuy);
    callback();
  });

  this.When(/^the user remove all products from shopping-cart$/, function(
    callback
  ) {
    // Write code here that turns the phrase above into concrete actions

    aShopingCart.removeAllItems();
    console.warn("'''''''''''''''", aShopingCart.thingsToBuy);
    callback();
  });
  this.Then(/^the shopping cart should be empty and update.$/, function(
    callback
  ) {
    // Write code here that turns the phrase above into concrete actions
    assert.deepEqual(aShopingCart.thingsToBuy, [], "the cart is updated");
    callback();
  });

  //scenaro-3//

  this.Given(/^that the user has products with different quantities$/, function(
    callback
  ) {
    // Write code here that turns the phrase above into concrete actions
    aShopingCart = new ShoppingCart();
    aShopingCart.add(myApp.products[0], 10);
    aShopingCart.add(myApp.products[1], 25);
    aShopingCart.add(myApp.products[2], 50);
    aShopingCart.add(myApp.products[4], 100);
    console.warn("-----", aShopingCart.thingsToBuy);
    callback();
  });

  this.When(/^the user try to empty the shopping-cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    aShopingCart.removeAllItems();
    callback();
  });

  this.Then(/^the shopping cart should be updated.$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    assert.deepEqual(
      aShopingCart.thingsToBuy,
      [],
      " error: The shopingcart is not cleared!"
    );

    callback();
  });
};
