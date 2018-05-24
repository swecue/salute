Feature: As a user of Systembolagets online shop
    I want my own shopping cart that is saved when closing the browser

    Scenario: User opens the page for the first time
        Given that the user hasn't entered the page
        When the user opens the page
        Then the user should see an empty cart by the cart icon.

    Scenario: User has no item in cart
        Given that the user already has a cart
        And has no items in cart
        When the user enters the page
        Then the user should see no number by the cart icon

    Scenario: User already has items in cart
        Given that the user already has a cart
        And has items in cart
        When the user enters the page
        Then the user should see the number of items in the cart by the cart icon
