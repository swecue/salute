let assert = require("assert");
let myApp = require("../app.js");
let ShoppingCart = require("../js/classes/shopping-cart.js");

module.exports = function() {
let { $, sleep } = require("./funcs");
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that the user has a shopping cart$/, async function() {

      myApp.addUser("Benny", 43);
      assert.deepStrictEqual(
        0,
        myApp.users[0].shoppingCart.thingsToBuy.length,
        "Cart is not empty"
      );

  });

  this.Given(/^that the shopping cart is not empty$/, async function() {
      let p = await $(".shopping-cart .product");
      assert(p != null, "The Cart is Empty");
  });

  this.When(/^the user clicks the shopping cart button$/, async function() {
      let cartbtnclick = await $('#nav-shopping-cart-btn').click();
      console.log("Clicked!");
  });

  this.Then(/^a new window will open$/, async function() {
      assert ((await driver.getCurrentUrl()).includes("cart"),"Did not load the Cart page (mycart.html)";
      await sleep(1000);
  });

  this.Then(
    /^the user will see an overview of his\/her cart$/,
    async function() {
        let overview = await $(".shopping-cart");
        assert(overview == null, "Cart Overview");
    }
  );

  this.Given(/^that the user has a empty cart$/, async function() {
      let emptycart = await $(".shopping-cart");
      assert(emptycart == null, "Cart is not empty");
  });

  this.When(/^the user clicks the cart button$/, async function() {
      let cartbtnclick2 = await $('#nav-shopping-cart-btn').click();
      console.log("Clicked");
  });

  this.Then(/^a new window should open$/, async function() {
      assert ((await driver.getCurrentUrl()).includes("cart"),"Did not load the Cart page (mycart.html)";
      await sleep(1000);
    });

  this.Then(
    /^the user will be presented with his\/her empty cart$/,
    async function() {  let emptycart = await $(".shopping-cart .product");
     assert(emptycart == null, "Cart is not empty");

    }
  );

  this.Given(/^that the users cart window is open$/, async function() {});
  await helpers.loadPage("localhost:3000/mycart.html");
  await sleep(1000);

  this.When(/^the user clicks on the home nav button$/, async function() {
      let homebtnclick2 = await $('#nav-home-btn').click();
      console.log("Clicked home button");
  });

  this.Then(/^the home page opens$/, async function() {
      assert ((await driver.getCurrentUrl()).includes("index"),"Did not load the Home page (index.html)";
      await sleep(1000);
  });

  this.Then(/^the user is no longer on the cart page$/, async function() {


  });
};
