Feature: As a user I want to be able to change the quantity of a product inside of my shopping cart to meet my needs.

    Scenario: Reducing the quantity of a product in the shopping cart.
        Given that the quantity of a product is seven
        When you reduce the quantity by two
        Then the quantity of the product should be five

    Scenario: Adding to the quantity of a product in my cart
        Given that the quantity of a product is four
        When you add two to the quantity of a product
        Then the quantity of the product should have changed to six

    Scenario: Try to change quantity of a product not in the cart
        Given that the cart has one product
        When you try to change quantity of another product that is not in the cart
        Then you should get an error

    Scenario: Change quantity for one product in cart
        Given that the cart has three diffrent products each with a quantity of one
        When you change quantity of one of the products to ten
        Then the changed product should have a quantity of ten
        And the other two products should still have a quantity of one each 

    
