let assert = require("assert");

module.exports = function(){
  function $(selector){
    return driver.findElement(by.css(selector));
  }

}
