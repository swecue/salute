$.ready = async () => {
  const searchResult = document.querySelector(".searchresult");

  const box = new SearchBox();
  await box.loaded;

  let userInput = $("#sb-input-field").value();

  let result = box.search(userInput);

  result.slice(0, 100).forEach(product => {
    const newDiv = document.createElement("li");
    const newA = document.createElement("a");
    const newContent = document.createTextNode(
      `${product.namn} | ${product.ursprunglandnamn} | ${product.varugrupp}`
    );

    newA.setAttribute(
      "href",
      `searchresult.html?varnummer=${product.varnummer} | ${product.namn} | ${
        product.ursprunglandnamn
      } | ${product.varugrupp}`
    );

    newA.appendChild(newContent);
    newDiv.appendChild(newA);
    productsContainer.appendChild(newDiv);
  });
};
//
