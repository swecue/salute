let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function(){

	let cart = new ShoppingCart();
	let quantity;
	let product;

         this.Given(/^that the quantity\-input box is displayed and filled in with a valid number$/, function (callback) {
        quantity=22
         callback();
       });
           this.When(/^the user clicks the Add\-button in the quantity\-dialogue$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

         this.Then(/^the product of will be added to the cart with the quantity entered$/, function (callback) {
        
        cart.add(product, quantity)
        callback();
    });

      }