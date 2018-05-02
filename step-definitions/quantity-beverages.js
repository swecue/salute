let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function(){

	let cart = new ShoppingCart();


  this.Given(/^that we have a user wants to add quantity to shopping cart$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
     
       });
        

      }