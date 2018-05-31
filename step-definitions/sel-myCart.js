let assert = require("assert");
let myApp = require("../app.js");
let ShoppingCart = require("../js/classes/shopping-cart.js");

module.exports = function() {
  let { $, sleep } = require("./funcs");
  myApp.addUser("Simon", 19);

  this.Given(/^that the user does not have the page open$/, async function() {
    await sleep(100);
  });

  this.Given(/^at least one item in cart$/, async function() {
    await myApp.users[0].shoppingCart.removeAllItems();
    await myApp.users[0].shoppingCart.add(myApp.products[5], 2);
    await sleep(100);
  });

  this.When(/^the user opens the overview page$/, async function() {
    await helpers.loadPage("http://localhost:3000/mycart.html");
    await sleep(100);
  });

  this.Then(/^the user should see the correct amount of items in cart$/, async function() {
    let numItems = await $(".shopping-cart .product");
    assert(numItems === 1, "The amount of items in cart is not correct, expected 1");
    await sleep(100);
  });


  this.Given(/^that the user is on the overview webpage$/, async function() {
    await helpers.loadPage("http://localhost:3000/mycart.html");
    await sleep(100);
  });

  this.Given(/^has no items in cart$/, async function() {
    myApp.users[0].shoppingCart.removeAllItems();
    await sleep(100);
  });


  this.When(/^the user refreshes the overview page$/, async function() {
    await driver.navigate().refresh();
    await sleep(100);
  });


  this.Then(/^the user should see no items in the cart$/, async function() {
    let numItems = await $(".shopping-cart .product");
    assert(numItems === null, "The amount of items in cart is not correct, expected 0");
    await sleep(100);
  });


  this.Given(/^that the user is on the overview page$/, async function() {
    await helpers.loadPage("http://localhost:3000/mycart.html");
    await sleep(100);
  });


  this.Given(/^has items in cart$/, async function() {
    myApp.users[0].shoppingCart.removeAllItems();
    myApp.users[0].shoppingCart.add(myApp.products[5], 2);
    await sleep(100);
  });

  this.When(/^the user refresh the overview page$/, async function() {
    await driver.navigate().refresh();
    await sleep(100);
  });

  this.Then(/^the user should see the number of items in cart as previously$/, async function() {
    let numItems = await $(".shopping-cart .product");
    assert(numItems === 1, "The amount of items in cart is not correct, expected 1");
    await sleep(100);
  });

}
