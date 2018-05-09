let assert = require('assert');
let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {

  //Define global variables in order to compare them later on
  //These are temporarily hardcoded in order to test my own test code.
  let addedProduct = "Öl";
  let addedQuantity = 3;


//Creating a function to check if a specified product is in your cart
  function productCheck(product) {
    //For loop that loops through every item in your cart
    for (let i = 0; myApp.users[0].shoppingCart.thingsToBuy.length > 0; i++) {
      //notStrictEqual to make sure the value we get does NOT equal to -1.
      //See shopping-cart.js to see how findProductInCart works.
      //If value equals to -1 then we'll an assertion error saying "The product was not found"
      assert.notStrictEqual(-1, myApp.users[0].shoppingCart.findProductInCart(product),
      ['The product was not found']);
    }
  }

 //Creating a function to check the total quantity of your cart
  function quantityCheck(totalQuantity) {
    //Creating a variable and give it a value of 0
    let checkTotalQuantity = 0;
    //For loop that loops through every item in your cart
    for (let i = 0; myApp.users[0].shoppingCart.thingsToBuy.length > i; i++) {
      //For loop that loops through every quantity in your cart
      for (let y = 0; myApp.users[0].shoppingCart.thingsToBuy[i].quantity > y; y++) {
        //Adding 1 to the variable we created every time it loops through a quantity
        checkTotalQuantity++;
      }
    }
    //deepStrictEqual that compares what we know SHOULD be the total quantity with
    //what is currently the total value.
    //Gives us an assertion error if the totalQuantity and checkTotalQuantity do not match
    //that says "Quantity not the same as previously"
    return assert.deepStrictEqual(totalQuantity, checkTotalQuantity,
      ['Quantity not the same as previously' + "(" + totalQuantity + ')']);
  }

  this.Given(/^that the user never entered the page$/, function(callback) {
    //If the user has never entered the page he should not have a user already
    myApp.users.length = 0;
    callback();
  });

  this.When(/^the user enters the page for the first time$/, function(callback) {
    callback();
  });

  this.Then(/^a user with an empty cart should be added$/, function(callback) {
    //A user is created with an empty cart
    myApp.addUser('Calle', 23);
    //Making sure the cart of user is empty
    //Since the cart is supposed to be empty we compare the actual length of the cart
    //with 0. If the length is > 0 then we get an assertion error saying "Cart is not empty"
    assert.deepStrictEqual(0, myApp.users[0].shoppingCart.thingsToBuy.length, ['Cart is not empty']);

    callback();
  });

  this.Given(/^that the user has one or more items added to the cart$/, function(callback) {
    //Adding a bunch of products to the user's cart, see app.js to see how "add" works.
    myApp.users[0].shoppingCart.add(addedProduct, addedQuantity);
    myApp.users[0].shoppingCart.add('Vin', 2);
    myApp.users[0].shoppingCart.add('Bärs', 4);
    myApp.users[0].shoppingCart.add('Vodka', 2);
    callback();
  });

  this.When(/^the user close the browser$/, function(callback) {
    callback();
  });

  this.When(/^open the browser again$/, function(callback) {
    callback();
  });


  this.When(/^navigate to page$/, function(callback) {
    callback();
  });

  this.Then(/^the cart should have the exact same products$/, function(callback) {
    //Calling the function we created earlier to check if "addedProduct"
    //(the hardcoded variable we created earlier, this can be changed to whatever string or variable you like)
    //is in your cart
    productCheck(addedProduct);
    callback();
  });

  this.Then(/^the exact same amount of total products$/, function(callback) {
    //Calling the function we created earlier to see if the total cart quantity
    //is the same as what we input, at the moment we would get an assertion error
    //since we have more than 3 items in the cart
    quantityCheck(3);
    callback();
  });

  this.Given(/^that the user has added items to my cart$/, function(callback) {
    myApp.users[0].shoppingCart.thingsToBuy.length > 0;
    callback();
  });
  this.When(/^the user refreshes the page$/, function(callback) {
    callback();
  });
  this.Then(/^the cart should have the same products$/, function(callback) {
    callback();
  });

  this.Then(/^the same amount of total products$/, function(callback) {
    quantityCheck(3);
    callback();
  });

  this.Given(/^that the user has one or more items in his cart$/, function(callback) {
    callback();
  });

  this.When(/^the user refreshes the page without cache$/, function(callback) {
    callback();
  });

  this.Then(/^the cart should contain the same products$/, function(callback) {
    callback();
  });

  this.Then(/^contain the same amount of total products$/, function(callback) {
    quantityCheck(1);
    callback();
  });
}
