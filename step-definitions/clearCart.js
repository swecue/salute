// let theApp = require("../app.js");
// let ShoppingCart = require("../shopping-cart.js");
// let Product = require('../product.js');
// let assert = require('assert');


// module.exports = function(){
//     //A list of items that we have in cart.
//     let cart;
//     let Product1;
//     let product2;
//     let anotherproduct;
//     let allProducts;
//     let error;
//     let quantity;

//     //scenario-1//

// this.Given(/^that the user has (\d+) products in the shopping-cart$/, function (arg1, callback) {
//          // Write code here that turns the phrase above into concrete actions
//          cart = new ShoppingCart();
//          cart.add(theApp.products[0], 0);
//         callback();
//        });

//  this.When(/^the user remove products from shopping-cart$/, function (callback) {
//          // Write code here that turns the phrase above into concrete actions
        
//         cart.remove(theapp.products[0]);

//         try {
//           cart.remove(anotherProduct);
//         } 
//          catch (er) {
//             error = er;
//         }
//         callback();
//        });

// this.Then(/^the shoppingcart displays error message.$/, function (callback) {
//          // Write code here that turns the phrase above into concrete actions
//  assert(
//           error !== undefined,
//             " when trying to remove a product that is not in the shopping cart."
//         );
//         callback();
//     });

// //scenario-2//

// this.Given(/^that the user has products in the shopping-cart$/, function (callback) {
//          // Write code here that turns the phrase above into concrete actions
//          product1 = theapp.products[0];
//          product2 = theapp.products[1];
//          cart = new ShoppingCart();
//          cart.add(product1[0], 4);
//          cart.add(product2[1], 5);
//          callback();
//        });

//  this.When(/^the user remove all products from shopping-cart$/, function (callback) {
//          // Write code here that turns the phrase above into concrete actions
         
//          Cart.removeAllItems();
//          console.warn(Cart.thingsToBuy);
//          callback();
//        });
//  this.Then(/^the shopping cart should be empty and update.$/, function (callback) {
//          // Write code here that turns the phrase above into concrete actions
//          assert(Cart === "empty" , "the cart is updated")
//          callback();
//        });

//  //scenaro-3//

// this.Given(/^that the product has article number"([^"])"$/, function (arg1, callback) {
//          // Write code here that turns the phrase above into concrete actions
//          cart = new ShoppingCart;
//          product1 = app.products[0];
//          product2 = app.products[1];
//         callback();
//        });
// this.Given(/^the quantity "([^"])"$/, function (arg1, callback) {
//          // Write code here that turns the phrase above into concrete actions
//          callback();
//        });


// this.When(/^the user try to empty the shopping-cart$/, function (callback) {
//          // Write code here that turns the phrase above into concrete actions
//          callback();
//        });


//   this.Then(/^the shopping cart should be updated.$/, function (callback) {
//           // Write code here that turns the phrase above into concrete actions
//           callback();
//         });

//    this.Given(/^that the product has article number"([^"])"$/, function (arg1, callback) {
//           // Write code here that turns the phrase above into concrete actions
//           callback();
//         });

//    this.Given(/^the quantity "([^"])"$/, function (arg1, callback) {
//           // Write code here that turns the phrase above into concrete actions
//           callback();
//         });

//      this.When(/^the user try to empty the shopping-cart$/, function (callback) {
//           // Write code here that turns the phrase above into concrete actions
//           callback();
//         });

//       this.Then(/^the shopping cart should be updated.$/, function (callback) {
//           // Write code here that turns the phrase above into concrete actions
//           callback();
//         });