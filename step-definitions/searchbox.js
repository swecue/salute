let assert = require("assert");
let SearchBox = require("../js/classes/search-box-class.js");
let app = require("../app.js");

module.exports = function() {
  let searchResult = [];
  let userInput;
  let products;

  this.Given(
    /^that the user has entered a searchstring of at least three letters$/,
    function(callback) {
      userInput = "ries";

      callback();
    }
  );

  this.When(/^the search executes$/, function(callback) {
    //creating new instance of SearchBox class
    let box = new SearchBox();

    searchResult = box.search(userInput);
    callback();
  });

  this.Then(/^products matching the searchstring are displayed$/, function(
    callback
  ) {
    for (product of searchResult) {
      // assert that the searchResult corresponds to userInput
      assert(
        product.varugrupp.includes(userInput) ||
          product.namn.includes(userInput) ||
          product.namn2.includes(userInput),
        "Product in searchResult is not from userInput"
      );
    }

    // assert that the searchResult is an array
    assert(searchResult.constructor == Array, "We didn't create a list");

    callback();
  });

  this.Given(/^that the user is searching for product by country$/, function(
    callback
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
      for (product of searchResult) {
        // assert that the searchResult corresponds to userInput
        assert(
          product.ursprunglandnamn.includes(userInput),
          "Product in searchResult is not from userInput"
        );
      }

      callback();
    }
  );

  this.Given(/^that the user is searching for product by ID number$/, function(
    callback
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
    for (product of searchResult) {
      // assert that the searchResult corresponds to userInput
      assert(
        product.varnummer == userInput,
        "Product in searchResult is not from userInput"
      );
    }
    callback();
  });

  this.Given(
    /^that the user is searching for product by it's first letter$/,
    function(callback) {
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
      for (product of searchResult) {
        // assert that the searchResult corresponds to userInput
        console.log(product.namn.charAt(0), "========", userInput);
        assert(
          product.namn.charAt(0) == userInput ||
            product.namn2.charAt(0) == userInput,
          "Product in searchResult is not from userInput"
        );
      }
      callback();
    }
  );
};
