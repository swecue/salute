Feature: As a user of Systembolagets online shop
    I want my own shopping cart that is saved when closing the browser

    Scenario: User close and reopen the browser and page
        Given that the user has the page open
        And at least one item in cart
        When the user close the browser
        And open the browser again
        And open the webpage again
        Then the user should see the same amount of items in cart as previously

    Scenario: User has no item in cart
        Given that the user already has a cart
        And has no items in cart
        When the user refreshes the page
        Then the user should see no items in the cart

    Scenario: User already has items in cart
        Given that the user already has a cart
        And has items in cart
        When the user refresh the page
        Then the user should see the number of items in cart as previously
