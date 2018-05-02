// Require the parts of the program we want to test
let Cart = require('../shopping-cart.js');  

// All our steps/tests should be wrapped in 
// moudule.exports = function(){ ... our code ...}
module.exports = function(){

  // Declaring variables I want to be able to share 
  // between the different steps
  let name, age, aPerson;


this.Given(/^that we have a user$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions

         callback(null, 'pending');
       });


 this.When(/^the user wants to see what is in the shopping cart$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


  this.Then(/^a list of everything there should be produced$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


 this.Then(/^if there is nothing there an empty list should be produced\.$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });
