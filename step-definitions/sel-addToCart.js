let assert = require("assert");

module.exports = function() {
    function $(selector) {
    return driver.findElement(by.css(selector));
       }

  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  this.Given(/^that I'm at the product page$/,async function() {
    await helpers.loadPage("http://localhost:3000/product.html?varnummer=77747");
    console.log("it works");    
  })
    this.When(/^I click the add button product to cart$/,async function() {
  
    let theButton = await $('#add-btn');

    assert(theButton, "The #add-btn doesn't exist");
    if (theButton) {
      await theButton.click();
      await sleep(1000);
    }
  });

  
        

   this.Then(/^the shopping cart overview should shows the added product$/,async function(){
         await helpers.loadPage("http://localhost:3000/mycart.html");
        await sleep(3000);
         
       });

       this.When(/^I click to fill the quantity\-input box cart$/, async function() {
      let userInput = 22;
      let field = await $('input[type="number"]');
      assert(field, "The doesn't exist");
      if (field) {
        console.warn("FIELD", field);
        await field.clear();
        await field.sendKeys(userInput);
        await sleep(1000);
        // click the add-to-cart button

    let theButton = await $('#add-btn');

    assert(theButton, "The #add-btn doesn't exist");
    if (theButton) {
      await theButton.click();
      await sleep(1000);
    }
  
      }
    }
  );
  
       
   
       this.Then(/^the shopping cart overview should shows the added number$/,async function () {
         
         
     await helpers.loadPage("http://localhost:3000/mycart.html");
        await sleep(5000);
         
       });

         
       
};


 