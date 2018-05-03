Feature: As a user of Systembolagets online shop
In order to buy beverages
I want to be able to add a certain quantity of a beverage to my shopping cart
The maximum quantity in the cart is 999 pcs

  Scenario:
      Given that the quantity-input box is displayed and filled in with a valid number
      When the user clicks the Add-button in the quantity-dialogue
      Then the product of will be added to the cart with the quantity entered
 

  Scenario:
      Given that the cart already contains a product
      When the user adds more of the product
      Then the quantity of the product should increase
 

  Scenario:
      Given that the cart already contains a product
      When the user tries to remove the product from the cart
      Then the product should be removed from the cart
 
  Scenario:
      Given that the cart already contains a product
      When the user reduces the quantity of the product in the cart to 0
      Then the product should be removed from the cart
 

 
  Scenario: When the user buy 1000 beverages it should not be possible 
       Given that the shopping cart has already 999 prodoucts 
       When the user add 1000 pcs beverages to shopping cart
 	   Then should show error 

	Scenario: 
	    Given that we have a user add quantity to shopping cart 
	    When the user wants to add 240 pcs of beverages 
	    Then shopping cart should be updated 

	Scenario:  
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