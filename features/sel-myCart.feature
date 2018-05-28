Feature: As a user of Systembolagets online shop
    I want my own shopping cart that is saved when closing the browser

    Scenario: User opens the page
        Given that the user does not have the page open
        And at least one item in cart
        When the user opens the overview page
        Then the user should see the correct amount of items in cart

    Scenario: User has no item in cart
        Given that the user is on the overview webpage
        And has no items in cart
        When the user refreshes the overview page
        Then the user should see no items in the cart

    Scenario: User has items in cart
        Given that the user is on the overview page
        And has items in cart
        When the user refresh the overview page
        Then the user should see the number of items in cart as previously
