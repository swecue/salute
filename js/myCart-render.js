(async () => {
  await myApp.loaded;

  let cartLength = myApp.users[0].shoppingCart.thingsToBuy.length;

  for (let i = 0; i < cartLength; i++) {
    let varId = myApp.users[0].shoppingCart.thingsToBuy[i].product.varnummer;
    let productName = myApp.users[0].shoppingCart.thingsToBuy[i].product.namn;
    let listItemStart = '<li class= my-2 bg-primary col-6 product data-varnummer=' + '"' + varId + '"' + '>';
    let productPrice = myApp.users[0].shoppingCart.thingsToBuy[i].product.prisinklmoms;
    let removeBtn = `<button class="btn rem-probtn" id=${varId}` + '>x</button>';
    $('.shopping-cart').append(listItemStart + productName + ': ' + productPrice + ' SEK' + removeBtn + '</li>');
  }
  $('.rem-probtn').click(function() {
    $(this).closest('li').remove();
    let getVarId = $(this).attr('id');
    let theProduct;

    for(let i=0;i<cartLength;i++){
       theProduct = myApp.users[0].shoppingCart.thingsToBuy[i].product;
       console.log(theProduct);
       console.log(theProduct.varnummer == getVarId);

      if(theProduct.varnummer == getVarId){
        myApp.users[0].shoppingCart.remove(theProduct);
        console.log('tjena');
        console.log(myApp.users[0].shoppingCart.remove(theProduct));
        break;
      }
    }

  })
})();
