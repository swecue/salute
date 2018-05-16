Feature: As a user of systembolaget onlineshop,I  would
    like to remove all products from the shopping-cart.

    Scenario: When the user remove all products from shopping-cart
        Given that the user has 0 products in the shopping-cart
        When the user remove  products from shopping-cart
        Then the shoppingcart displays error message.

    Scenario: When the user remove all products from shopping-cart
        Given that the user has products in the shopping-cart
        When the user remove all products from shopping-cart
        Then the shopping cart should be empty and update.

    Scenario Outline: When the user remove products
        Given that the product has article number"<Artno>"
        And the quantity "<quantity>"
        When the user try to empty the shopping-cart
        Then the shopping cart should be updated.
            Examples:
            | Artno    | quantity  |
            |  10      |  5        |
            |  12      |  4        |
