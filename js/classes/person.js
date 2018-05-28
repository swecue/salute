var assert = require("assert");
var ShoppingCart = require("./shopping-cart.js");

module.exports = class Person {
  constructor(name, birthDate) {
    // Throw an error if name is not an empty string
    assert(
      typeof name === "string" && name !== "",
      "The name must be a non-empty string!"
    );

    this.name = name;
    this.birthDate = birthDate;
    this.shoppingCart = new ShoppingCart();
  }
};
