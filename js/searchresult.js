let SearchBox = require("classes/search-box.js");
$.ready = async () => {
  const searchResult = document.querySelector(".searchresult");
  let data = window.location.search
    .substr(location.search.indexOf("sb-input-field=") + "sb-input-field=".length)
    .split("&")[0];
    console.log(data);
await myApp.loaded;

  const box = new SearchBox(data);
  await box.loaded;

  let result = box.search(data);

  result.slice(0, 100).forEach(product => {
    const newDiv = document.createElement("div");
    const newA = document.createElement("a");
    const newContent = document.createTextNode(
      `${product.namn} | ${product.ursprunglandnamn} | ${product.varugrupp}`
    );

    newA.setAttribute("href", `product.html?varnummer=${product.varnummer}`);

    newA.appendChild(newContent);
    newDiv.appendChild(newA);
    searchResult.appendChild(newDiv);
  });
};
//
