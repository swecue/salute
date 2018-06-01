(async () => {
  await myApp.loaded;

  // console.log('tha');
  // if(myApp.users[0].shoppingCart.thingsToBuy.length!=0){myApp.users[0].shoppingCart.removeAllItems();}

    // myApp.users[0].shoppingCart.add(myApp.products[5], 2);
    // myApp.users[0].shoppingCart.add(myApp.products[10], 5);
    // myApp.users[0].shoppingCart.add(myApp.products[14], 5);
    // myApp.users[0].shoppingCart.add(myApp.products[65], 5);
    //
    // // console.log(myApp.users[0].shoppingCart.thingsToBuy);
    //
    // let cartLength = myApp.users[0].shoppingCart.thingsToBuy.length;
    //
    // for (let i = 0; i < cartLength; i++) {
    //   let varId = myApp.users[0].shoppingCart.thingsToBuy[i].product.varnummer;
    //   let productName = myApp.users[0].shoppingCart.thingsToBuy[i].product.namn;
    //   let listItemStart = '<li class= my-2 bg-primary col-6 product data-varnummer=' + '"' + varId + '"' + '>';
    //   let productPrice = myApp.users[0].shoppingCart.thingsToBuy[i].product.prisinklmoms;
    //   let removeBtn = '<button class=float-right btn rem-probtn>x</button>';
    //   $('.shopping-cart').append(listItemStart + productName + ': ' + productPrice + ' SEK' + removeBtn + '</li>');
    // }
    $('.rem-probtn').click(function() {
      console.log('clicked!');
      // $(this).closest('li').remove();
    })
    $('.rem-probtn').click();

  //['+varId+']

})();
