Feature: As a user I want to be able to remove products from my shopping cart 
  if changed my mind about my shop

  Scenario: Remove a product from cart containing one product
      Given the user has one product in her shopping cart 
      And then entered the cart overview
      When she clicks on the remove product symbol
      Then the product will disappear from the cart overview

  Scenario: Remove a product from cart containing three products
      Given the user has three different products in his shopping cart 
      And entered the cart overview
      When he clicks on the remove product symbol for one of the products
      Then the removed product will disappear from the cart overview
      And the two other products will still be visible in the cart overview


  