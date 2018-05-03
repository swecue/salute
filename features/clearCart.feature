Feature: As a user of sysytembolaget onlineshop, I  would
    like to remove all products from the shopping-cart.

    Scenario: When the user wants to remove all products from shopping-cart.
        Given that the user has some products in the   shopping-cart
        When the user try to remove all products from shopping-cart.
        Then the shopping cart should be empty and update.

    Scenario Outline: When the user try to remove products
        Given that the product has article number "<Artno>"
        And the quantity type "<quantity>"
        When the user wants to empty
        Then the shopping cart should be updated.

        Examples:
            | Artno | quantity |
            | 1 | 10 |
            | 2,12,300 | 4 |
