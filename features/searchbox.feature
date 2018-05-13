Feature: Product search box function
As a user of Systembolagets online shop
In order to find my desired product
I want to be able to search for keywords to find it

Scenario: User wants to find a product by name
    Given that the user has entered a searchstring of at least three letters
    When the search executes
    Then products matching the searchstring are displayed

Scenario: User wants to find a product by its country
    Given that the user is searching for product by country
    When a country is entered to search for the product
    Then a list of products with the country entered is displayed

Scenario: User wants to find a product by its ID
    Given that the user is searching for product by ID number
    When user enters the ID of the product s/he want
    Then only the products with the ID entered is displayed

Scenario: User wants to find a product by its first letter
    Given that the user is searching for product by it's first letter
    When user enters the first letter of the product s/he want
    Then a list of products with the first letter of the letter entered is displayed





