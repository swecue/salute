// Require the parts of the program we want to test
let app = require("../app.js");
let ShoppingCart = require("../js/classes/shopping-cart.js");
let Product = require("../js/classes/product.js");
let Cartwindow = require("../js/classes/cartwindow.js");

// All our steps/tests should be wrapped in
// moudule.exports = function(){ ... our code ...}
module.exports = function() {
  // Declaring variables I want to be able to share
  let myCart;
  let notEmpty;
  let newWindow;
  let openWindow;
  let emptyCart;
  let productOne;
  let productTwo;
  let productThree;

  // between the different steps
  this.Given(/^that the user has a shopping cart that is not empty$/, function(
    callback
  ) {
    myCart = new ShoppingCart();
    notEmpty = app.products[40];

    callback();
  });

  this.When(/^the user clicks the shopping cart$/, function(callback) {
    console.log("I clicked"); // this will be tested in the next sprint;

    callback();
  });

  this.Then(
    /^the user should see the products and the quantity of each product in the shopping cart$/,
    function(callback) {
      assert(newWindow === Cartwindow.openWindow, "The window did not open.");
      callback();
    }
  );

  this.Given(/^that the user has a empty shopping cart$/, function(callback) {
    emptyCart = new ShoppingCart();

    callback();
  });

  this.When(/^the user opens it$/, function(callback) {
    //More will be added in next sprint.
    // Calling the cartwindow function to open a new shopping cart window.
    newWindow = Cartwindow.openWindow;
    callback();
  });

  this.Then(/^the shopping cart should be displayed as empty$/, function(
    callback
  ) {
    console.log(emptyCart);
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Given(
    /^that the user has added a product to the shopping cart$/,
    function(callback) {
      // Create a shopping cart
      myCart = new ShoppingCart();

      productOne = app.products[6];
      productTwo = app.products[90];
      productThree = app.products[22];

      //adding 3 items to the cart
      myCart.add(productOne, 7);
      myCart.add(productTwo, 78);
      myCart.add(productThree, 11);

      // Write code here that turns the phrase above into concrete actions
      callback();
    }
  );

  this.When(/^the user looks inside the shopping cart$/, function(callback) {
    //opens the mycart.html... this step wont work right now though.
    newWindow = Cartwindow.openWindow;

    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^the correct product should be displayed$/, function(callback) {
    console.log(myCart);
    // Write code here that turns the phrase above into concrete actions
    callback();
  });
};
