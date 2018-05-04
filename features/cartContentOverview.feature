Feature: As a user of Systembolagets online shop
In order to see what I have in my shopping cart
I want to be able list everything that is in my shopping cart


	Scenario: The user wants to see what is in the shopping cart, and a list with item name and quantity of everything in the shopping cart should be produced
	    Given that we have a user 
	    When the user tries to see what is in the shopping cart  
	    Then a list of everything there should be produced
	    And if there is nothing there an empty list should be produced.