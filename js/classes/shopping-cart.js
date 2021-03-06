var assert = require("assert");
var Product = require("./product.js");

module.exports = class ShoppingCart {
  constructor() {
    this.thingsToBuy = [];
  }

  add(product, quantity) {
    // should we check that the product
    // is an instanceOf Product ?

    // should we check that quantity is
    // a positive integer?

    // should we allow a product that's already in the cart
    // to be added? or error? or add an extra quantity?

    assert(quantity > 0, "Trying to add a product of < 1 quantity");
    assert(
      product instanceof Product,
      "Trying to add a non-product to the cart"
    );
    assert(
      typeof quantity == "number",
      "Trying to add a product with a non-numeric quantity"
    );
    let existingProductIndex = this.findProductInCart(product);

    if (existingProductIndex > -1) {
      // assert if the new quantity is not < 1000
      this.thingsToBuy[existingProductIndex].quantity += quantity;
    } else {
      this.thingsToBuy.push({
        product: product,
        quantity: quantity
      });
    }
    myApp.saveUser();

  }

  findProductInCart(product) {
    // should we check that product is an instance of Product?
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product.varnummer === product.varnummer) {
        return i;
      }
    }
    return -1;
  }

  changeQuantity(product, newQuantity) {
    // is product really an instance of Product
    // is newQuantity a positive integer?

    let index = this.findProductInCart(product);

    assert(
      index >= 0,
      "Can't change the quantity of a product not in the cart"
    );

    this.thingsToBuy[index].quantity = newQuantity;
  }

  remove(product) {
    let index = this.findProductInCart(product);

    assert(index >= 0, "Can't remove a product not in the cart");

    // remove the item completely from the cart
    this.thingsToBuy.splice(index, 1);
    myApp.saveUser();
  }

  removeAllItems() {
    this.thingsToBuy = [];
  }

  sum() {
    // how much does everything cost
    // would we like a line sum as well?
    // loop through thingsToBuy.
    // get the price of each product and multiply with the quantity
    // (gives us a line sum)
    // add a line sums into a total sum
  }
};
