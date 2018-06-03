(async () => {
  await myApp.loaded;

  let singleProduct = window.location.search
    .substr(location.search.indexOf("varnummer=") + "varnummer=".length)
    .split("&")[0];


  // function image(prod) {
  //   return `
  //     <div class="beverage">
  //     <img class="bev-image" src="${bev.photo}
  //     ${typeof product.varugrupp.value.includes == "vin" ? ${bev.photo}=images/wine.png  : ""}>
  //     </div>
  //
  //   `;
  // }

  function template(product) {
    return `
      <div class="beverage">

        <h2 class="name">${product.namn}</h2>
          <span class="varugrupp">
          (${product.varugrupp})
          </span>
          <p><h3>${
            typeof product.namn2 == "string" ? product.namn2 : ""
          }</h3></p>
          ${product.ursprunglandnamn}
          <div> </div>
      </div>
    `;
  }

  function temprice(product) {
    return `
      <div class="beverage">

        <h2 class="name">
          <span class="varugrupp">
          <p class="price">${product.prisinklmoms} kr</p>
          <p class="vol">${product.volymiml}ml</p>
          <h4>${product.forpackning}</h4>
          </span></h2>

      </div>
    `;
  }


  singleProduct = myApp.products.find(function(product) {
    return product.varnummer == singleProduct;
  });

  document.getElementById("singleproduct").innerHTML = template(singleProduct);
  document.getElementById("bevprice").innerHTML = temprice(singleProduct);
  //document.getElementById("singleproductimg").innerHTML = image(img);
})();
