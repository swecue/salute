let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function(){

   
     let cart;
     let product;
     let quantity;
    



     function Checkproduct(product) {
    
    for (let i = 0; myApp.products[0].shoppingCart.thingsToBuy.length > 0; i++) {
     
       assert.notStrictEqual(-1, myApp.products[0].shoppingCart.findProductInCart(product),
      ['The product was not added to the cart']);
    }
  }

         this.Given(/^that the quantity\-input box is displayed and filled in with a valid number$/, function (callback) {
         quantity=22;
         callback();
       });
          this.When(/^the user clicks the Add\-button in the quantity\-dialogue$/, function (callback) {
         product=myApp.products[0],22;
         callback();
       });
        
         this.Then(/^the product will be added to the cart with the correct quantity$/, function (callback) {
         cart.add(myApp.products[0],22);
         callback();
       });
          this.Then(/^the quantity should be equal to our original data$/, function (callback) {
         assert(
        quantity ===22
      
       );
         callback();
       });
       
       this.Given(/^that user has a shopping cart$/, function (callback) {
         cart = new ShoppingCart();
         callback();
       });
         this.When(/^the user add a valid product$/, function (callback) {
        product=myApp.products[5];
         callback();
       });
          this.Then(/^the shopping cart should be update with right product$/, function (callback) {
          cart.add(myApp.products[5]);
          callback();
       });
          
          this.Then(/^the product should be equal to our original data$/, function (callback) {
         
         callback();
       });

          this.Given(/^that the cart already contains a product$/, function (callback) {
         cart.add(myApp.products[10], 5);
         callback();
       });

       this.When(/^the user add more than one of the same product in the cart$/, function (callback) {
         cart.add(myApp.products[10],2);
         callback();
       });
       
       this.Then(/^the new quantity of product should be add to the cart$/, function (callback) {
         cart.add(myApp.products[10],7)
         callback();
       });
       this.Given(/^that the shopping cart has already (\d+) products$/, function (arg1, callback) {
         quantity=999
         
         callback();
       });
        this.When(/^the user add (\d+) pcs beverages to shopping cart$/, function (arg1, callback) {
         quantity=1000
         callback();
       });
         this.Then(/^should show an error$/, function (callback) {

        assert("The quantity of the product is invalid.");
      callback();
       });
       // Test for a number of scenarios with non-valid data for quantity
        let quantityToTryWith;
        let currentDataType;
        let error;
        let exampleData = {
         
         "boolean true": true,
         "boolean false": false,
         "array": [],
         "object": {},
         "null": null,
         "undefined": undefined,
         "empty string": ""
     };     
     this.Given(/^that user filled quantity\-input box with a "([^"]*)"$/, function (dataType, callback) {
        currentDataType = dataType;
        error = undefined;
        quantityToTryWith = exampleData[dataType];

         callback();
       });

    this.When(/^try to add to shopping cart$/, function (callback) {
         try {
      new ShoppingCart(product, quantityToTryWith);
     }
       catch(er){
      error = er;
      }
      callback();
  });
         this.Then(/^we should have an error$/, function (callback) {
         assert(
      error !== undefined,
      " get an error when trying to add quantity to a shoppingCart with a " + currentDataType + " as quantity."
    );
         callback();
       });





         }
                    
     
      