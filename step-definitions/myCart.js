let assert = require("assert");
let myApp = require("../app.js");
let ShoppingCart = require("../shopping-cart.js");

module.exports = function() {
  //Define global variables in order to compare them later on
  //These are temporarily hardcoded in order to test my own test code.
  let addedProduct = myApp.products[56];
  let addedQuantity = 3;

  //Creating a function to check the total quantity of your cart
  function quantityCheck(totalQuantity) {
    //Creating a variable and give it a value of 0
    let checkTotalQuantity = 0;
    //For loop that loops through every item in your cart
    for (let i = 0; myApp.users[0].shoppingCart.thingsToBuy.length > i; i++) {
      checkTotalQuantity += myApp.users[0].shoppingCart.thingsToBuy[i].quantity;
    }
    //deepStrictEqual that compares what we know SHOULD be the total quantity with
    //what is currently the total value.
    //Gives us an assertion error if the totalQuantity and checkTotalQuantity do not match
    //that says "Quantity not the same as previously"
    assert(
      totalQuantity == checkTotalQuantity,
      "Quantity not the same as previously" + "(" + totalQuantity + ")"
    );
  }

  this.Given(/^that the user never entered the page$/, function(callback) {
    //If the user has never entered the page he should not have a user already
    myApp.users.length = 0;
    callback();
  });

  this.When(/^the user enters the page for the first time$/, function(
    callback
  ) {
    callback();
  });

  this.Then(/^a user with an empty cart should be added$/, function(callback) {
    //A user is created with an empty cart
    myApp.addUser("Calle", 23);
    //Making sure the cart of user is empty
    //Since the cart is supposed to be empty we compare the actual length of the cart
    //with 0. If the length is > 0 then we get an assertion error saying "Cart is not empty"
    assert.deepStrictEqual(
      0,
      myApp.users[0].shoppingCart.thingsToBuy.length,
      "Cart is not empty"
    );

    callback();
  });

  this.Given(
    /^that the user has one or more items added to the cart$/,
    function(callback) {
      //Adding a bunch of products to the user's cart, see app.js to see how "add" works.
      myApp.users[0].shoppingCart.removeAllItems();
      myApp.users[0].shoppingCart.add(addedProduct, addedQuantity);
      myApp.users[0].shoppingCart.add(myApp.products[5], 2);
      myApp.users[0].shoppingCart.add(myApp.products[22], 4);
      myApp.users[0].shoppingCart.add(myApp.products[260], 2);
      callback();
    }
  );

  this.When(/^the user close the browser$/, function(callback) {
    callback();
  });

  this.When(/^open the browser again$/, function(callback) {
    callback();
  });

  this.When(/^navigate to page$/, function(callback) {
    callback();
  });

  this.Then(/^the exact same amount of total products$/, function(callback) {
    quantityCheck(11);
    callback();
  });

  this.When(/^the user refreshes the page$/, function(callback) {
    callback();
  });

  this.When(/^the user refreshes the page without cache$/, function(callback) {
    callback();
  });

  this.Then(/^the cart should contain the same products$/, function(callback) {
    assert(
      myApp.users[0].shoppingCart.findProductInCart(addedProduct) != -1,
      "Not the same products!"
    );
    callback();
  });
};
