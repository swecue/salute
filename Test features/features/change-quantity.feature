Feature: As a user of Systembolagets online shop
In order to buy beverages
I want to be able to change quantity of a beverage to my shopping cart
The maximum quantity in the cart is 999 pcs

	Scenario: When  the user wants  to  change the quantity beverage s/he should be asked about quantity
	    Given that we have a user with shopping cart
	    When the user wants to change of a beverages  
	    Then ask quantity of beverages

	Scenario: When the user wants to change 1000 beverages it should not be possible 
	    Given that we have a  user 
	    When the user wants to change  1000 beverages 
	    Then should not be possible

	Scenario: When the user wants to change the acceptable  quantity 
	    Given that we have a user 
	    When the user wants to add 240 beverages
	    Then shopping cart should be updated 

	Scenario: When the user wants to change 0 beverages it should not be possible 
	    Given that we have a  user 
	    When the user wants to add 0 beverages 
	    Then should not be possible
    


    Scenario Outline: When the user wants to buy beverages with a non-number
	    Given that we have a registered  user 
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
