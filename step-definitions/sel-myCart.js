let assert = require("assert");
let myApp = require("../app.js");
let ShoppingCart = require("../js/classes/shopping-cart.js");

module.exports = function(){
  async function $(selector){
    return await driver.findElement(by.css(selector));
  }
       this.Given(/^that the user does not have the page open$/, function (callback) {
         callback();
       });

       this.Given(/^at least one item in cart$/, function (callback) {
         myApp.users[0].shoppingCart.removeAllItems();
         myApp.users[0].shoppingCart.add(myApp.products[5], 2);
         callback();
       });

       this.When(/^the user opens the overview page$/, function (callback) {
           await helpers.loadPage("http://localhost:3000/mycart.html");
           await sleep(1000);
         callback();
       });

       this.Then(/^the user should see the correct amount of items in cart$/, function (callback) {
        let productsInCart = $(".shopping-cart .product");
        assert(productsInCart.length === 1, "The amount of items in cart is not correct");
         callback();
       });


       this.Given(/^that the user is on the overview webpage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Given(/^has no items in cart$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


       this.When(/^the user refreshes the overview page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


       this.Then(/^the user should see no items in the cart$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


       this.Given(/^that the user is on the overview page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


        this.Given(/^has items in cart$/, function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

        this.When(/^the user refresh the overview page$/, function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

        this.Then(/^the user should see the number of items in cart as previously$/, function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

}
