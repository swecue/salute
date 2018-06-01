 let assert = require("assert");

module.exports =  function(){
  let { $, sleep } = require("./funcs");

this.Given(/^that the user is on shopingcart page$/, async function() {
      await helpers.loadPage('http://localhost:3000/mycart.html');
      await sleep(1000);
            
  });
this.When(/^the user clicks remove all button$/, async function() {
      let clearCartButton = await driver.findElement(by.css("#empty-cartbtn"));
      assert(clearCartButton, "The empty-cartbtn doesn't exist");
      await clearCartButton.click();
  });
this.Then(/^those items should be removed from the shopingcart$/, async function() {

        await helpers.loadPage("http://localhost:3000/mycart.html");//
        await sleep(1000);        
   });

  this.Given(/^the shoping-cart has no products$/,
    async function() {
      await helpers.loadPage('http://localhost:3000');
      await sleep(1000); 
    });
  this.When(/^the user clicks the cart overview$/, async function() {
    
   let linkToMyCart = await $('#nav-shopping-cart-btn');
        assert(linkToMyCart, "The link doesn't exist");
        await linkToMyCart.click();
  });
  this.Then(/^the clearCart button is shown as disabled$/, async function() {
    
    await helpers.loadPage("http://localhost:3000/mycart.html");//
        await sleep(1000);
    
  });
};