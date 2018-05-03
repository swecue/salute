// Require the parts of the program we want to test
let Category = require('../category.js');  
let myApp = require('../app.js'); 
// All our steps/tests should be wrapped in 
// moudule.exports = function(){ ... our code ...}
module.exports = function(){



 this.Given(/^that the user is on the webpage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


 this.When(/^we search for a product by category "([^"]*)" and\/or country "([^"]*)"$/, function (arg1, arg2, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

 this.Then(/^we should get lists with the products that relate to the information we searched for$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

  this.Given(/^that the user is on the webpage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


 this.When(/^we search for a product by category "([^"]*)" and\/or country "([^"]*)"$/, function (arg1, arg2, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });
 
 this.Then(/^we should get lists with the products that relate to the information we searched for$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });




}