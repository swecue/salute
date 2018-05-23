Feature: As a user of Systembolagets Online shop I want to have a overview of my shopping cart.
    In order to see what it contains, shown as a list of all the items and their quantity.

    Scenario: User views his/her shopping cart
        Given that the user has a shopping cart
        And that the shopping cart is not empty
        When the user clicks the shopping cart button
        Then a new window will open
        And the user will see an overview of his/her cart

    Scenario: User opens an empty cart
        Given that the user has a empty cart
        When the user clicks the cart button
        Then a new window should open
        And the user will be presented with his/her empty cart

    Scenario: User closes his/her cart overview window
        Given that the users cart window is open
        When the user clicks on the home nav button
        Then the home page opens
        And the user is no longer on the cart page
