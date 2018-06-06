let SearchBox = require("classes/search-box.js");
$.ready = async () => {
  const searchResult = document.querySelector(".searchlist");
  let data = window.location.search
    .substr(location.search.indexOf("sb-input-field=") + "sb-input-field=".length)
    .split("&")[0];
    console.log(data);
await myApp.loaded;

  const box = new SearchBox(data);
  await box.loaded;

  let result = box.search(data);
  let liColStart = '<li class= my-2 bg-primary col-6 product' + 'data-varnummer=' + '"' + varId + '"' + '>';

  result.slice(0, 100).forEach(product => {
      $('.searchlist').append(listItemStart + productName + ': ' + productPrice + ' SEK' + removeBtn + '</li>');


    // const newDiv = document.createElement("div");
    // const newA = document.createElement("a");
    // const newContent = document.createTextNode(
    //   `${product.namn} | ${product.ursprunglandnamn} | ${product.varugrupp}`
    // );
    //
    // newA.setAttribute("href", `product.html?varnummer=${product.varnummer}`);
    //
    // newA.appendChild(newContent);
    // newDiv.appendChild(newA);
    // searchResult.appendChild(newDiv);
  });
};
//let cartLength = myApp.users[0].shoppingCart.thingsToBuy.length;

for (let i = 0; i < cartLength; i++) {
  let varId = myApp.users[0].shoppingCart.thingsToBuy[i].product.varnummer;
  let productName = myApp.users[0].shoppingCart.thingsToBuy[i].product.namn;
  let listItemStart = '<li class= my-2 bg-primary col-6 product data-varnummer=' + '"' + varId + '"' + '>';
  let productPrice = myApp.users[0].shoppingCart.thingsToBuy[i].product.prisinklmoms;
  let removeBtn = `<button type="button" class="btn btn-sm btn-danger rem-probtn" id=${varId}` + '>&#10006;</button>';
  $('.shopping-cart').append(listItemStart + productName + ': ' + productPrice + ' SEK' + removeBtn + '</li>');
}
