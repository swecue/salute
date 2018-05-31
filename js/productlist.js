$.ready = async () => {
  const productsContainer = document.querySelector(".products-container");

  const app = new App();
  await app.loaded;

  app.products.slice(0, 100).forEach(product => {
    const newDiv = document.createElement("div");
    const newA = document.createElement("a");
    const newContent = document.createTextNode(
      `${product.namn} | ${product.ursprunglandnamn} | ${product.varugrupp}`
    );
    //  newA.setAttribute("href", $(".product").load("product.html", varnummer=${product.varnummer});
    newA.setAttribute("href", `product.html?varnummer=${product.varnummer}`);

    newA.appendChild(newContent);
    newDiv.appendChild(newA);
    productsContainer.appendChild(newDiv);
  });
};
