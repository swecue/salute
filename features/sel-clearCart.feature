Feature: As a user of systembolaget onlineshop
  i like to remove all products from the shopingcart.

    Scenario: The user remove products from shoping-cart
        Given  that the user is on shopingcart page
        When the user clicks remove all button
        Then those items should be removed from the shopingcart.

    Scenario: The user is on the shopingcart page
        Given the shoping-cart has 0 quantity of products
        When the user clicks the cart overview 
        Then the shopingcart shown as disabled.
