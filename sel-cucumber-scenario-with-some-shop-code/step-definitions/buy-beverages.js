let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function(){

	let cart = new ShoppingCart();

 	this.Given(/^that we have a regiestered  user$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions

         // myApp.products[0]
         callback();
       });
 
    this.When(/^the user wants to add of a beverages$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

    this.Then(/^ask qunntity of beverages$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

    this.When(/^the user wants to add (\d+) beverages$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
        });
     this.Then(/^shopping cart should be updated$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
      
      
}