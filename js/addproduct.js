(async () => {
  await myApp.loaded;

  const addButton = document.querySelector("#add-btn");
  addButton.removeAttribute("disabled");

  const productId = parseInt(
    new URLSearchParams(location.search).get("varnummer"),
    10
  );
  const product = myApp.products.find(p => p.varnummer === productId);

  if (!product) {
    throw new Error(`Product by id ${productId} was not found`);
  }

  const shoppingCart = myApp.users[0].shoppingCart;

  addButton.addEventListener("click", event => {
    const quantityInput = document.querySelector("#add-q-input-field");
    const quantity = parseInt(quantityInput.value, 10);

    myApp.users[0].shoppingCart.add(product, quantity);

    console.log(shoppingCart.thingsToBuy);
  });
})();
