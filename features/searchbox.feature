Feature: Product search box function
As a user of Systembolagets online shop
In order to find my desired product
I want to be able to search for keywords to find it

Scenario: User wants to find a product by name

    Given that the user has entered a searchstring of at least three letters
    When the search executes
    Then products matching the searchstring are displayed

Scenario: User wants to find a product by its country
    Given that the user is searching for product
    When user enters country to search for the product
    Then list of products with the country entered is displayed

Scenario: User wants to find a product by its ID
    Given that the user is searching for product
    When user enters the ID of the product s/he want
    Then only the product with the ID entered is displayed

Scenario: User wants to find a product by its first letter
    Given that the user is searching for product
    When user enters the first letter of the product s/he want
    Then a list of products with the letter entered as first letter is displayed





