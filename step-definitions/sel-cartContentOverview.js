let assert = require("assert");
module.exports = function() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



this.Given(/^that the user has a shopping cart$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });
