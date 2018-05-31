
$.ready = async () => {
        const app = new App()
        await app.loaded

        const addButton = document.querySelector('#add-btn')
        addButton.removeAttribute('disabled')

        const productId = parseInt(new URLSearchParams(location.search).get('id'), 10)
        const product = app.products.find(p => p.varnummer === productId)

        if (!product) {
          throw new Error(`Product by id ${productId} was not found`)
        }

        const ShoppingCart = await require('./js/classes/shopping-cart')
        const shoppingCart = new ShoppingCart()

        addButton.addEventListener('click', event => {
          const quantityInput = document.querySelector('#add-q-input-field')
          const quantity = parseInt(quantityInput.value, 10)

          shoppingCart.add(product, quantity)

          console.log('REMOVE ME shoppingCart.thingsToBuy', shoppingCart.thingsToBuy)
        })
      }