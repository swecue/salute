Feature: Purchase a product
  As a systembolaget online user
  I want to be able to purchase
  The items in my shopping cart

  Scenario: Valid Purchase
    Given that the user has one or more items in his cart
    And has proceeded to checkout
    When user confirms purchase
    Then remove items from cart
    And a popup should show thanking user for the purchase
    And adjust stock

  Scenario: Confirm Purchase
    Given that the user has one or more items in his cart
    And has the cart open
    When user press purchase
    Then confirm the user really wants to proceed.

  Scenario: Insufficient funds
    Given that the user has one or more items in his cart
    And does not have sufficient funds on his payment method
    And has proceeded to checkout
    When the user confirms purchase
    Then 'Error: Insufficient funds'

  Scenario: Purchase canceled
    Given that the user has proceeded to checkout
    When user does not confirm purchase
    Then cancel purchase
