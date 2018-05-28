let assert = require("assert");
module.exports = function() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that the user has a shopping cart$/, async function() {});

  this.Given(/^that the shopping cart is not empty$/, async function() {});

  this.When(/^the user clicks the shopping cart button$/, async function() {});

  this.Then(/^a new window will open$/, async function() {});

  this.Then(
    /^the user will see an overview of his\/her cart$/,
    async function() {}
  );

  this.Given(/^that the user has a empty cart$/, async function() {});

  this.When(/^the user clicks the cart button$/, async function() {});

  this.Then(/^a new window should open$/, async function() {});

  this.Then(
    /^the user will be presented with his\/her empty cart$/,
    async function() {}
  );

  this.Given(/^that the users cart window is open$/, async function() {});

  this.When(/^the user clicks on the home nav button$/, async function() {});

  this.Then(/^the home page opens$/, async function() {});

  this.Then(/^the user is no longer on the cart page$/, async function() {});
};
