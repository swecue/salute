Feature: As a user of Systembolagets online shop
In order to buy beverages
I want to be able  to add the beverages to my shopping cart


Scenario:user clicks the add button shopping cart overview should be updated  
    Given that I'm at the product page 
    When I click the add button product to cart 
    Then the shopping cart overview should shows the added product 

Scenario:user filled the quantity-input box is whit number 
    Given that I'm at the product page 
    When I click to fill the quantity-input box cart 
    Then the shopping cart overview should shows the added number 
