Feature: As a user of Systembolagets online shop
In order to buy beverages
I want to be able to add a certain quantity of a beverage to my shopping cart
The maximum quantity in the cart is 999 pcs

  Scenario: adding valid number of quantity 
      Given that user has a shopping cart 
      And that the quantity-input box is displayed and filled in with a valid number
      When the user clicks the Add-button in the quantity-dialogue
      Then the product will be added to the cart with the correct quantity 
      And the quantity should be equal to our original data



   Scenario:adding a valid product to shopping cart  
      Given that user has a shopping cart 
      When the user add a valid product
      Then the shopping cart should be update with right product
      And the product should be equal to our original data  
 
  Scenario:that user can add more than one of the same Product
   	  Given that user has a shopping cart 
      And that the cart already contains a product
      When the user add more than one of the same product in the cart 
      Then the new quantity of product should be add to the cart


  Scenario: When the user add 1000 beverages it should not be possible 
       Given that the shopping cart has already 999 products 
       When the user add 1000 pcs beverages to shopping cart
 	   Then should show an error 

    
    Scenario Outline: When the user add quantity beverages with a non-number
	    Given that user has a shopping cart 
	    When the user add beverages with the quantity of type "<non-valid-data-type>" 
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
	    | NaN                 |