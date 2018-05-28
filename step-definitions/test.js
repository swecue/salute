let assert = require("assert");
module.exports = function() {
  function $(selector) {
    return driver.findElement(by.css(selector));
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  this.Given(/^that the user is on page$/, async function() {
    await helpers.loadPage("localhost:3000");
    console.log("it works");
    await sleep(1000);
  });

  this.When(/^the user clicks$/, async function() {
    let theButton = await driver.findElement(by.css("#wow"));
    await theButton.click();
  });

  this.Then(/^user is happy$/, async function() {
    let body = await driver.findElement(by.css("body"));
    let bgColor = await body.getCssValue("background-color");
    await sleep(1000);
    assert(bgColor == "rgba(0, 0, 255, 1)", "The background turned blue!");
    console.log(" end");
  });
};
