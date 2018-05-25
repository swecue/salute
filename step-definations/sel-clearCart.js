// module.exports = function()
//  {
//   let {$, sleep} = require('./funcs');
//   {
//     //A list of items that we have in cart//
//     function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//    }
//     this.Given(/^that the user is on shopingcart page$/,async function(){
//          // Write code here that turns the phrase above into concrete actions
//          await helpers.loadPage("localhost:3000");
//          console.log("it works");
//          await sleep(1000);
//        });
    
//     this.When(/^the user clicks remove all button$/, async function () {
//          // Write code here that turns the phrase above into concrete actions
//           let theButton = await driver.findElement(by.css("..."));
//           await theButton.click();
//          });
//     this.Then(/^those items should be removed from the shopingcart\.$/, async function() {
//          // Write code here that turns the phrase above into concrete actions
//          let body = await driver.findElement(by.css("body"));
//          let bgColor = await body.getCssValue("background-color");
//          assert(bgColor == "rgba(0, 0, 255, 1)", "The background turned blue!");
//          console.log(" end");
//         });
// }


// //scenario 2//
//     this.Given(/^the shoping\-cart has (\d+) quantity of products$/, async function (arg1,) {
//          // Write code here that turns the phrase above into concrete actions
//          callback();
//        });
//     this.When(/^the user clicks the cart overview$/, async function () {
//          // Write code here that turns the phrase above into concrete actions
//          let theButton = await driver.findElement(by.css("..."));
//           await theButton.click();
//          callback();
//        });
//      this.Then(/^the shopingcart shown as disabled\.$/,async function () {
//          // Write code here that turns the phrase above into concrete actions
//          assert.deepEqual(aShopingCart.thingsToBuy,[], "the cart is disabled");
//          callback();
//        });
 }
