Feature: As a user of Systembolagets online shop
I want my own shopping cart that is saved when closing the browser

    Scenario: Each user should have their own "my cart"
        Given that a user does not have a "my cart" from before
        When the user enters the page for the first time
        Then a "my cart" will be added to the user

    Scenario: When the user refreshes the page "my cart" should not change
        Given that the user has added items to "my cart"
        When the user refreshes the page
        Then the content of "my cart" should remain the same.
