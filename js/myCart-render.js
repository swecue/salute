(async () => {
  await myApp.loaded;
  
  // console.log('tha');
  // if(myApp.users[0].shoppingCart.thingsToBuy.length!=0){myApp.users[0].shoppingCart.removeAllItems();}

  myApp.users[0].shoppingCart.add(myApp.products[5], 2);
  myApp.users[0].shoppingCart.add(myApp.products[10], 5);
  myApp.users[0].shoppingCart.add(myApp.products[14], 5);
  myApp.users[0].shoppingCart.add(myApp.products[65], 5);

  // console.log(myApp.users[0].shoppingCart.thingsToBuy);

  let cartLength = myApp.users[0].shoppingCart.thingsToBuy.length;
  for (let i=0; i < cartLength; i++) {
    let varId = myApp.users[0].shoppingCart.thingsToBuy[i].product.varnummer;
    let productName = myApp.users[0].shoppingCart.thingsToBuy[i].product.namn;
    console.log(varId);
    $('.shopping-cart').append('<li class='+'"'+'product'+'"'+'data-varnummer='+'"'+varId+'"'+'>'+productName+': </li>');
  }
  $('.product').append('<span> $399</span>');



  // console.log(myApp.users[0].shoppingCart.thingsToBuy[0].product.varnummer);
})();
