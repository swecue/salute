Feature: As a user of Systembolagets online shop
I want my own shopping cart that is saved when closing the browser

    Scenario: Each user should have their own cart
        Given that the user never entered the page
        When the user enters the page for the first time
        Then a user with an empty cart should be added

    Scenario: Closing and reopening browser
        Given that the user has one or more items added to the cart
        When the user close the browser
        And open the browser again
        And navigate to page
        Then the cart should have the exact same products
        And the exact same amount of total products

    Scenario: Refreshing the page
        Given that the user has added items to my cart
        When the user refreshes the page
        Then the cart should have the same products
        And the same amount of total products

    Scenario: Refreshing the page without cache
        Given that the user has one or more items in his cart
        When the user refreshes the page without cache
        Then the cart should contain the same products
        And contain the same amount of total products
