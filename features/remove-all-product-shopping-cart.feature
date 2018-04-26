Feature: As a user of sysytembolaget onlineshop,i would   
like to remove all products from the shoppingcart.

  Scenario:When the user wants to remove all products from shoppingcart.

       Given that the user has some products in the   shoppingcart
       When the user try to remove all products from shoppingcart.
       Then the shopping cart should be empty and update

 Scenario outline: When the user try to remove products      	      Given that the product has article number"<Artno>"
 	   And the quantity type "<quantity>" .
       When the user wants to empty
       Then the shopping cart should be updated.

      Example: |Artno    |quantity|
               |   1     |   10   |
               |2,12,300 |    4   |