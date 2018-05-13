Feature: As a user I want to be able to remove products from my shopping cart 
  if changed my mind about my shop


  Scenario Outline: Remove a product with a quantity of <quantity> from the shopping cart
      Given you have a product with a quantity of "<quantity>" in the shopping cart  
      When you remove the product from the shopping cart
      Then the shopping cart will not contain the removed product

      Examples:
      |quantity|
      |1       |
      |999     |


  Scenario: Remove a single product from a shopping cart containing several products
      Given you have a number of different products in the shopping cart  
      When you remove one of the products from the shopping cart
      Then the shopping cart will only contain the products that was not removed 
  

  Scenario: Try to remove a product that is not in the shopping cart
      Given you have a shopping cart with a product  
      When you try to remove another product that is not in the shopping cart
      Then you should get a runtime error