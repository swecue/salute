Feature: As a user of systembolaget onlineshop,I  would
    like to remove all products from the shopping-cart.

    Scenario: The user remove products from shopping-cart
        Given that the user has 0 products in the shopping-cart
        When the user remove products from shopping-cart
        Then the shoppingcart displays error message.

    Scenario: The user remove all products from shopping-cart
        Given that the user has products in the shopping-cart
        When the user remove all products from shopping-cart
        Then the shopping cart should be empty and update.

    Scenario: The user remove products from shopping-cart
        Given that the user has products with different quantities
        When the user try to empty the shopping-cart
        Then the shopping cart should be updated.
            
        