let assert = require("assert");
//let searchBox = require("../search-box-class.js");

module.exports = function() {
  async function $(selector) {
    let elements = await driver.findElements(by.css(selector));
    // elements will always be an array (zero items if no found, otherwise 1-several)

    // sugar - if we find exactly element just return that, not the whole array
    if (elements.length === 1) {
      return elements[0];
    }

    // sugar - if none found at all
    if (elements.length === 0) {
      return null;
    }

    // otherwise return array
    return elements;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that the user is on web page$/, async function() {
    await helpers.loadPage("http://localhost:3000");
    await sleep(1000);
  });

  this.Given(
    /^that the user then has entered characters in the search box\.$/,
    async function() {
      let userInput = "jord";
      let field = await $("#sb-input-field");
      assert(field, "The #sb-input-field doesn't exist");
      if (field) {
        console.warn("FIELD", field);
        field.sendKeys(userInput);
        await sleep(1000);
      }
    }
  );
  this.When(/^the user clicks the search icon$/, async function() {
    let theButton = await $("#searchicon");
    assert(theButton, "The #searchicon doesn't exist");
    if (theButton) {
      await theButton.click();
      await sleep(1000);
    }
  });

  this.Then(
    /^products matching the searchstring are displayed in the search result html page\.$/,
    async function() {
      // waits until the search list exist
      // give up after 100 tries
      let giveUpAfter = 100;
      let searchlist;
      do {
        sleep(100);
        giveUppAter--;
        searchlist = await $(".searchlist");
      } while (!searchlist && giveUpAfter > 0);
      await sleep(1000);

      assert(searchlist, "The .searchlist never showed up - waited for it...");

      if (searchlist) {
        // Start grabbing individual products from it compare them with what I searched for
        let foundProducts = await $(".searchlist .product");
        assert(foundProducts, "Found no products. Expected 7...");

        let jordanCo = 0;
        for (let product of foundProducts) {
          let productText = await product.getText();
          if (productText.includes("Jordan")) {
            jordanCo++;
          }
        }
        assert(
          jordanCo === 7, // because we have checked in the sortiment.json and there are 7
          "Didn't find 7 products with the namn Jordan when searching for 'jord'"
        );
      }
    }
  );
};
/*render
event listeners
create html
API
IDE
*/
