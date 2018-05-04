let SearchBox = require('../search-box-class.js');
let Person = require('../person.js'); 

module.exports = function(){

let searchResult;
let userInput;


this.Given(/^that the user has entered a searchstring of at least three letters$/, function (arg1, callback) {
         
         userInput = "vin";

         callback();
       });


this.When(/^the search executes$/, function (callback) {

         let box = new SearchBox();
        
        searchResult = box.search(userInput);
         callback();
       });

this.Then(/^products matching the searchstring are displayed$/, function (callback) {
         
         for (let i = 0; i < searchResult.length; i++) {
         	if(str.search(SearchResult.length))
         }

         callback();
       });

this.When(/^user enters country to search for the product$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.Then(/^list of products with the country entered is displayed$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.When(/^user enters the ID of the product s\/he want$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


}