(async () => {
  await myApp.loaded;

  let cartLength = myApp.users[0].shoppingCart.thingsToBuy.length;

  for (let i = 0; i < cartLength; i++) {
    let varId = myApp.users[0].shoppingCart.thingsToBuy[i].product.varnummer;
    let productName = myApp.users[0].shoppingCart.thingsToBuy[i].product.namn;
    let listItemStart = `<tr><td class= 'product' data-varnummer=' + '"' + varId + '"' + '>`;
    let productPrice = myApp.users[0].shoppingCart.thingsToBuy[i].product.prisinklmoms;
    let removeBtn = `<button type="button" class="btn btn-sm btn-light rem-probtn" id=${varId}` + '>&#10006;</button>';
    $('.shopping-cart').append(listItemStart + productName + ': '+ '</td><td>' + productPrice + ' SEK</td><td>' + removeBtn + '</td></tr>');
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
        // BUG: calls remove one additional time in console statement
        // console.log(myApp.users[0].shoppingCart.remove(theProduct));
        break;
      }
    }

  })
})();
