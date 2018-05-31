let assert = require("assert");

let {$, sleep} = require('./funcs');


module.exports =  function(){

  let removedVarnummer;

 
this.Given(/^the user has one product in her shopping cart$/, async function () {
        
      await helpers.loadPage('http://localhost:3000/product?varnummer=1');
      await sleep(1000);

      let addToCartButton = await $('#add-btn');
      assert(addToCartButton, "The add to cart button doesn't exist");
    	await addToCartButton.click();         
       });

this.Given(/^entered the cart overview$/, async function () {
        
       await helpers.loadPage('http://localhost:3000/mycart');
    	 await sleep(1000);
         
       });

this.When(/^she clicks on the remove product symbol$/, async function () {
       let removeButton = await $('.rem-probtn');
       assert(removeButton, "The .rem-probtn doesn't exist");
    	 await removeButton.click();
         
       });

this.Then(/^the product will disappear from the cart overview$/, async function () {
        let productsInCart = await $(".shopping-cart .product");
        assert(productsInCart == null, "The product was not removed from the cart");
         
       });


this.Given(/^the user has three different products in his shopping cart$/, async function () {
        // Load product page for product one with varnummer 1 (from sortiment.json)
        // product name: Renat
        await helpers.loadPage('http://localhost:3000/product?varnummer=1');
        await sleep(1000);
        // Use the add to cart botton to add the product
        let addToCartButton1 = await $('#add-btn');
        assert(addToCartButton1, "The add to cart button doesn't exist");
    	  await addToCartButton1.click();

    	// Load product page for product two with varnummer 75489 (from sortiment.json)
      // product name: Valtellina Superiore
    	  await helpers.loadPage('http://localhost:3000/product?varnummer=75489');
        await sleep(1000);
        // Use the add to cart botton to add the product
        let addToCartButton2 = await $('#add-btn');
        assert(addToCartButton2, "The add to cart button doesn't exist");
    	  await addToCartButton2.click();

    	// Load product page for product three with varnummer 75218 (from sortiment.json)
      // product name: Purcari
    	  await helpers.loadPage('http://localhost:3000/product?varnummer=75218');
        await sleep(1000);
        // Use the add to cart botton to add the product
        let addToCartButton3 = await $('#add-btn');
        assert(addToCartButton3, "The add to cart button doesn't exist");
    	  await addToCartButton3.click();

         
       });

this.Given(/^entered the cart overview$/, async function () {
         await helpers.loadPage('http://localhost:3000/mycart');
    	   await sleep(1000);
         
       });

this.When(/^he clicks on the remove product symbol for one of the products$/, async function () {
         let removeButton = await $('.rem-probtn[data-varnummer="75489"]');
         assert(removeButton, "The .rem-probtn doesn't exist");
         await removeButton.click();
         
       });

this.Then(/^the removed product will disappear from the cart overview$/, async function () {
         assert(await $('.rem-probtn[data-varnummer="75489"]') == null, "")
         
       });

this.Then(/^the two other products will still be visible in the cart overview$/, async function () {
         let productsInCart = await $(".shopping-cart .product");
         assert(productsInCart, "Found no products. Expected 2...");
         assert(productsInCart.length === 2, "The product was not removed from the cart");
         
       });
}