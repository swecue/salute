let assert = require("assert");

module.exports = function() {
    function $(selector) {
    return driver.findElement(by.css(selector));
       }

  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  this.Given(/^that I'm at the product page$/,async function() {
    await helpers.loadPage("http://localhost:3000/product.html");
    console.log("it works");    
  });

    this.When(/^I click the add button product to cart$/,async function() {
  
    let theButton = await $('#Add-btn');

    assert(theButton, "The #Add-btn doesn't exist");
    if (theButton) {
      await theButton.click();
      await sleep(1000);
    }
  });

  
        

   this.Then(/^the shopping cart overview should shows the added product$/,async function  {
         await helpers.loadPage("http://localhost:3000/mycart.html");
         
       });

       this.When(/^I click  to fill the quantity\-input box cart$/,  {
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
  
       
   
       this.Then(/^the shopping cart overview should shows the added number$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

         
       
};


 