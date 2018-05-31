// Read classes from other files
var Person = require("./js/classes/person.js");
var Product = require("./js/classes/product.js");
var Category = require("./js/classes/category.js");

class App {

  get loaded() {
    return this._loaded
  }

  constructor() {


    let productData;
    let categoryData;

    if (typeof window !== "undefined") {
      this.loadUser();

      this._loaded = new Promise(async (resolve, reject) => {
        try {
          productData = await require("./json/sortiment.json");
          categoryData = await require("./json/categories.json");
          this.constructorContinued(productData, categoryData);
          resolve()
        } catch (er) {
          reject(er)
        }
      })

      /*
      (async () => {
        productData = await require("./json/sortiment.json");
        categoryData = await require("./json/categories.json");
        this.constructorContinued(productData, categoryData);
      })();
    } else {
      productData = require("./json/sortiment.json");
      categoryData = require("./json/categories.json");
      this.constructorContinued(productData, categoryData);
    }
  }

  loadUser() {
    console.log(localStorage.getItem('user') === null);
    if (localStorage.getItem('user') === null) {
      this.addUser('Customer', 18);
      localStorage.setItem('user', JSON.stringify(this.users[0]));
    } else {
      this.users.push(JSON.parse(localStorage.getItem('user')));
    }
  }

  constructorContinued(productData, categoryData) {
    // Make instances of Product from the productdata
    this.products = [];
    for (let p of productData) {
      this.products.push(new Product(p));
    }

    // Make instances of Category from categoryData
    this.categories = [];
    for (let catName of categoryData) {
      this.categories.push(new Category(catName, this.products));
    }

    // Make a "dictionary" based on category names
    this.categoryByName = {};
    for (let category of this.categories) {
      this.categoryByName[category.name] = category;
    }

    // Add a list of active/logged in user
    this.users = [];
  }

  addUser(name, birthDate) {
    this.users.push(new Person(name, birthDate));
  }

  //placeholder method
  filter(filterString) {}
}

// Create an app to start our application
let myApp = new App();

// Exporting the app instance so that I can use it
// in my test code (step definitions) via require
module.exports = myApp;

// Check if we can look up categoryByName
// console.log(myApp.categoryByName["Rött vin från Spanien"]);

// Quick test of users and shopping carts
/*
myApp.addUser('Anna', 25);
myApp.users[0].shoppingCart.add(myApp.products[0], 10);
myApp.users[0].shoppingCart.add(myApp.products[551], 99);
console.log (myApp.users[0].shoppingCart.thingsToBuy)
*/
