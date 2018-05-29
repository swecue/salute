let assert = require("assert");

module.exports = function() {

  // This does NOT give us all of jQuery's functions.
  // It's just a shorter way of writing "findElem...."
  function $(selector){
    return driver.findElement(by.css(selector));
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  this.Given(/^that I'm at the product page$/, async function () {
         await helpers.loadPage('http://localhost:3000');
         await sleep(1000);
       });


     this.When(/^I click the add product to cart button$/,async function () {
         let theButton = await $('#sbadd product');
    await theButton.click();

   
    assert(theButton, "The #sb-addbtn doesn't exist");
    if (theButton) {
      await theButton.click();
      await sleep(1000);
    }
  });

         
       
this.Then(/^the shopping cart overview should shows the added proudact$/, async function () {
         let
       });


 }