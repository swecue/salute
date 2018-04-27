let ShoppingCart = require('../shopping-cart.js');
let App = require('../app.js');
let assert = require('assert');

module.exports = function(){
  App.addUser('Urban', 18);
  let theCart = App.users[0].shoppingCart;

  theCart.add(App.products[3], 2);
  console.warn(theCart.thingsToBuy.length);
  //
  // let myCart = new ShoppingCart();
  // myCart.add('Whine',3);



    this.Given(/^that the user has one or more items in his cart$/, function (callback) {
      callback();
    });

     this.Given(/^has proceeded to checkout$/, function (callback) {

        callback();
      });

     this.When(/^user confirms purchase$/, function (callback) {
       // assert(
       //   ConfirmPurchase = true;
       // );
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.Then(/^remove items from cart$/, function (callback) {
              // Write code here that turns the phrase above into concrete actions
        callback();
      });

      this.Then(/^a popup should show thanking user for the purchase$/, function (callback) {
                     // Write code here that turns the phrase above into concrete actions
         callback();
      });

      this.Then(/^adjust stock$/, function (callback) {
        let prevStock=1;
        let newStock=3;
        let itemsBought=2;
        assert(
          prevStock + itemsBought == newStock,
          'Stock not updated correctly'
        );
        callback();
      });

      this.Given(/^has the cart open$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.When(/^user press purchase$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.Then(/^confirm the user really wants to proceed\.$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.Given(/^that the user has proceeded to checkout$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.When(/^user does not confirm purchase$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.Then(/^cancel purchase$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.Given(/^that the user does not have any items in the cart$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback();
    });

    this.When(/^user tries to proceed to checkout$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       callback();
     });

     this.Then(/^'Unable to proceed, no items in cart'$/, function (callback) {
       assert(
          theCart.thingsToBuy.length > 0,
         'Error: No items in cart');
        callback();
     });

  }
