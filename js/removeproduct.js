function c(){
  const app = myApp;


  const productId = parseInt(new URLSearchParams(location.search).get('varnummer'), 10)
  const removeProductButton = document.querySelector('.rem-probtn[productId]')
  const product = app.products.find(p => p.varnummer === productId)

  if (!product) {
    throw new Error(`Product by id ${productId} was not found`)
  }

  const ShoppingCart = require('./js/classes/shopping-cart')
  const shoppingCart = new ShoppingCart()

  removeProductButton.addEventListener('click', event => {

   // const quantityInput = document.querySelector('.product-quantity input')
   // const quantity = parseInt(quantityInput.value, 10)

    shoppingCart.remove(product)

    console.log(shoppingCart.thingsToBuy)
  })
}