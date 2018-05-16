Feature: As a user of Systembolagets Online shop I want to have a overview of my shopping cart.
    In order to see what it contains, shown as a list of all the items and their quantity.

    Scenario: Show whats in shopping cart
        Given that the user has a shopping cart that is not empty
        When the user clicks the shopping cart
        Then the user should see the products and the quantity of each product in the shopping cart

    Scenario: Show empty shopping cart
        Given that the user has a empty shopping cart
        When the user opens it
        Then the shopping cart should be displayed as empty

    Scenario: Display correct products in shopping cart
        Given that the user has added a product to the shopping cart
        When the user looks inside the shopping cart
        Then the correct product should be displayed

	Scenario: The user wants to see what is in the shopping cart, and a list with item name and quantity of everything in the shopping cart should be produced
	    Given that we have a user
	    When the user tries to see what is in the shopping cart
	    Then a list of everything there should be produced
	    And if there is nothing there an empty list should be produced.
