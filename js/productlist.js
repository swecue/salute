$.ready = async () => {
  const productsContainer = document.querySelector(".products-container");

  await myApp.loaded;

  myApp.products.slice(0, 100).forEach(product => {
    const newDiv = document.createElement("div");
    const newA = document.createElement("a");
    const newContent = document.createTextNode(
      `${product.namn} | ${product.ursprunglandnamn} | ${product.varugrupp}`
    );
    newA.setAttribute("href", `product.html?varnummer=${product.varnummer}`);

    newA.appendChild(newContent);
    newDiv.appendChild(newA);
    productsContainer.appendChild(newDiv);
  });
};
