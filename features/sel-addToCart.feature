Feature: As a user of Systembolagets online shop
In order to buy beverages
I want to be able  to add a certain quantity of a beverage to my shopping cart


Scenario: When user clicks the add button the website should 
    Given that I'm at the product page 
    When I click the add product to cart button
    Then the shopping cart overview should shows the added proudact  

Scenario: When user filled the quantity-input box is whit number 
    Given that I'm at the product page 
    When I click  to fill the quantity-input box cart 
    Then the shopping cart overview should shows the added number 
