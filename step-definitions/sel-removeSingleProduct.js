let assert = require("assert");

let { $, sleep } = require('./funcs');

const visualSleep = 1000
const loadProductsSleep = 3000

module.exports = function () {

  let removedVarnummer;

  this.Given(/^the user has one product in her shopping cart$/, async function () {

    await helpers.loadPage('http://localhost:3000/product.html?varnummer=1');
    await sleep(loadProductsSleep);

    let addToCartButton = await $('#add-btn');
    assert(addToCartButton, "The add to cart button doesn't exist");
    await addToCartButton.click();
  });

  this.Given(/^then entered the cart overview$/, async function () {
    await helpers.loadPage('http://localhost:3000/mycart.html');
    await sleep(visualSleep);

  });

  this.When(/^she clicks on the remove product symbol$/, async function () {
    let removeButton = await $('.rem-probtn');
    assert(removeButton, "The .rem-probtn doesn't exist");
    await removeButton.click();
    await sleep(visualSleep);
  });

  this.Then(/^the product will disappear from the cart overview$/, async function () {
    let productsInCart = await $(".shopping-cart .product");
    assert(productsInCart == null, "The product was not removed from the cart");
  });


  this.Given(/^the user has three different products in his shopping cart$/, async function () {
    // Load product page for product one with varnummer 1 (from sortiment.json)
    // product name: Renat
    await helpers.loadPage('http://localhost:3000/product.html?varnummer=1');
    await sleep(loadProductsSleep);
    // Use the add to cart botton to add the product
    let addToCartButton1 = await $('#add-btn');
    assert(addToCartButton1, "The add to cart button doesn't exist");
    await addToCartButton1.click();

    // Load product page for product two with varnummer 75489 (from sortiment.json)
    // product name: Valtellina Superiore
    await helpers.loadPage('http://localhost:3000/product.html?varnummer=75489');
    await sleep(loadProductsSleep);
    // Use the add to cart botton to add the product
    let addToCartButton2 = await $('#add-btn');
    assert(addToCartButton2, "The add to cart button doesn't exist");
    await addToCartButton2.click();

    // Load product page for product three with varnummer 75218 (from sortiment.json)
    // product name: Purcari
    await helpers.loadPage('http://localhost:3000/product.html?varnummer=75218');
    await sleep(loadProductsSleep);
    // Use the add to cart botton to add the product
    let addToCartButton3 = await $('#add-btn');
    assert(addToCartButton3, "The add to cart button doesn't exist");
    await addToCartButton3.click();
  });

  this.Given(/^entered the cart overview$/, async function () {
    await helpers.loadPage('http://localhost:3000/mycart.html');
    await sleep(visualSleep);

  });

  this.When(/^he clicks on the remove product symbol for one of the products$/, async function () {
    const removeButtonById75489 = await driver.findElement(by.css('.rem-probtn[id="75489"]'))
    assert(removeButtonById75489, "The .btn rem-probtn doesn't exist");
    await removeButtonById75489.click();
  });

  this.Then(/^the removed product will disappear from the cart overview$/, async function () {
    const numProductsInCart = (await driver.findElements(by.css('.rem-probtn'))).length
    assert(numProductsInCart === 2, "Too many products in cart")

    const products = await driver.findElements(by.css('.rem-probtn[id="75489"]'))
    assert(products.length === 0, "Removed product is still present")
  });

  this.Then(/^the two other products will still be visible in the cart overview$/, async function () {
    const removeButtonById1 = await driver.findElement(by.css('.rem-probtn[id="1"]'))
    const removeButtonById75218 = await driver.findElement(by.css('.rem-probtn[id="75218"]'))

    assert(removeButtonById1, "The remove button by id 1 is not present")
    assert(removeButtonById75218, "The remove button by id 75218 is not present")
  });
}