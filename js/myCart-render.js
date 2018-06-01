function testFunc() {
  console.log("tha");

  myApp.addUser("calle", 23);
  myApp.users[0].shoppingCart.add(2, 2);
  console.log(myApp.users[0].shoppingCart.thingsToBuy);

  $(".shopping-cart").append("<span> tja</span>");
}
