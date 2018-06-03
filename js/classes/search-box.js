var assert = require("assert");
module.exports = class SearchBox {

  constructor(searchString) {
    this.searchString = searchString
  }

  get searchString() {
      return this._searchString;
    }

    set searchString(value) {
      if (value.length < 3) {
        alert("Input is too short.");
        return;
      }
      this._searchString = value;
    }


  search(searchString) {

    let results = [];
    if (
      typeof searchString === "string" &&
      /^[A-ZÅÄÖa-zåäö]$/.test(searchString)
    ) {
      results = myApp.products.filter(function(product) {
        return (
          product.namn.toString()[0] == searchString ||
          product.namn2.toString()[0] == searchString
        );
      });
    } else if (
      typeof searchString === "string" ||
      searchString instanceof String
    ) {
      results = myApp.products.filter(function(product) {
        return (
          product.namn.toString().includes(searchString) ||
          product.namn2.toString().includes(searchString) ||
          product.varugrupp.toString().includes(searchString) ||
          product.ursprunglandnamn.toString().includes(searchString)
        );
      });
    } else if (isNaN(searchString) == false) {
      results = myApp.products.filter(function(product) {
        return product.varnummer == searchString;
      });
    }

    return results;
  }
};
