let SearchBox = require("../search-box-class.js");
let app = require("../app.js");

module.exports = function() {
  let searchResult;
  let userInput;

  this.Given(
    /^that the user has entered a searchstring of at least three letters$/,
    function(userInput, callback) {
      userInput = "vin";

      callback();
    }
  );

  this.When(/^the search executes$/, function(userInput, callback) {
    let box = new SearchBox();

    searchResult = box.search(userInput);
    callback();
  });

  this.Then(/^products matching the searchstring are displayed$/, function(
    callback
  ) {
    let myApp = new app();
    product.searchResult;

    products = [];

    callback();
  });

  this.Given(/^that the user is searching for product by country$/, function(
    userInput
  ) {
    userInput = "italien";

    callback();
  });

  this.When(/^a country is entered to search for the product$/, function(
    callback
  ) {
    // search for country in json file
    let box = new SearchBox();

    searchResult = box.search(userInput);
    callback();
  });

  this.Then(
    /^a list of products with the country entered is displayed$/,
    function(callback) {
      // list

      products = [];

      callback();
    }
  );

  this.Given(/^that the user is searching for product by ID number$/, function(
    userInput
  ) {
    userInput = 75997;

    callback();
  });

  this.When(/^user enters the ID of the product s\/he want$/, function(
    callback
  ) {
    let box = new SearchBox();

    searchResult = box.search(userInput);
    callback();
  });

  this.Then(/^only the products with the ID entered is displayed$/, function(
    callback
  ) {
    products = [];

    callback();
  });

  this.Given(
    /^that the user is searching for product by it's first letter$/,
    function(userInputs) {
      userInput = "a";

      callback();
    }
  );

  this.When(
    /^user enters the first letter of the product s\/he want$/,
    function(callback) {
      let box = new SearchBox();

      searchResult = box.search(userInput);

      callback();
    }
  );

  this.Then(
    /^a list of products with the first letter of the letter entered is displayed$/,
    function(callback) {
      products = [];

      callback();
    }
  );
};
