Feature: As a user of Systembolagets online shop
In order to buy beverages
I want to be able to add a certain quantity of a beverage to my shopping cart
The maximum quantity in the cart is 999 pcs

	Scenario: When  the user wants to buy beverage s/he should be asked about quantity
	    Given that we have a user wants to add quantity to shopping cart 
	    When the user wants to add of a beverages  
	    Then ask quantity of beverages

	Scenario: When the user wants to buy 1000 beverages it should not be possible 
	    Given that we have a user wants to add quantity to shopping cart 
	    When the user wants to add 1000 pcs beverages to shopping cart
	    Then should not be possible

	Scenario: When the user wants to add acceptable quantity 
	    Given that we have a user wants to add quantity to shopping cart 
	    When the user wants to add 240 pcs of beverages 
	    Then shopping cart should be updated 

	Scenario: When the user wants to buy 0 beverages it should not be possible 
	    Given that we have a user wants to add quantity to shopping cart 
	    When the user wants to add 0 beverages 
	    Then should not be possible
    


    Scenario Outline: When the user wants to buy beverages with a non-number
	    Given that we have a user wants to add quantity to shopping cart 
	    When the user wants to add beverages with the quantity of type "<non-valid-data-type>" 
	    Then should not be possible

	    Examples:
	    | non-valid-data-type |
	    | boolean true        |
	    | boolean false       |
	    | array               |
	    | object              |
	    | null                |
	    | undefined           |
	    | empty string        |



