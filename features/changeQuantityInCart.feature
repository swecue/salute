Feature: As a user I want to be able to change the quantity of a product inside of my shopping cart to meet my needs.

    Scenario: Reducing the quantity of a product in the shopping cart.
        Given that the quantity of a product is 7
        When the user reduces the quantity by 2
        Then the quantity of the product should be 5

    Scenario: Adding to the quantity of a product in my cart
        Given that the quantity of a product is 4
        When the user adds 2 to the quantity of a product
        Then the quantity of the product should have changed to 6

    Scenario: Adding to the quantity when the total quantity is at 999
        Given that the cart has a total quantity of 999
        When the user adds 3 to the quantity of a product
        Then the quantity should not change
        And a error message should be displayed

    Scenario: Adding 999 to the quantity of a product
        Given that a product has a quantity of 48
        When the user adds 999 to the product quantity
        Then the total quantity of the cart should be 999
        And 951 of the product should be added
