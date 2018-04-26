Feature: Shopping Cart Item Quantity Display
  As a Systembolagt online shop user
  I want to keep track of how many items I have in my cart

  Scenario: No items in cart
    Given the user has the website open
    And has no items in his cart
    When don't add any items
    Then show number 0 by the cart logo.

  Scenario: Adding item to cart
    Given the user has the website open
    And has no items in cart
    When user adds an item to cart
    Then number by the cart logo shows 1

  Scenario: Removing item from cart
    Given the user has the website open
    And has an item in cart
    When user removes item from cart
    Then number by the cart logo decrease by 1
