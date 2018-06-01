$.ready = async () => {
  let singleProduct = window.location.search
    .substr(location.search.indexOf("varnummer=") + "varnummer=".length)
    .split("&")[0];

  await myApp.loaded;

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

        <h2 class="name">${product.namn}
          <span class="varugrupp">
          (${product.varugrupp})
          </span></h2>
          <p><h3>${
            typeof product.namn2 == "string" ? product.namn2 : ""
          }</h3></p>
          ${product.ursprunglandnamn}
          <p>${product.prisinklmoms}</p>
          <p>${product.volymiml}</p>

      </div>
    `;
  }

  singleProduct = myApp.products.find(function(product) {
    return product.varnummer == singleProduct;
  });

  document.getElementById("singleproduct").innerHTML = template(singleProduct);
  //document.getElementById("singleproductimg").innerHTML = image(img);
};
