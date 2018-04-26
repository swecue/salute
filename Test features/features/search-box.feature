Feature: As a user of Systembolagets online shop
In order to find my desired product
I want to be able to search for keywords to find it

  Scenario: When the user wants to find a product by its name
    Given that the user has clicked the search box
    When user enters name of the product
    And press search
    Then show products with the name entered

  Scenario: When the user wants to find a product by its category
    Given that the user has clicked the search Box
    When user enters name of the catergory
    And press search
    Then show products with the category entered

  Scenario: When the user wants to find a product by its ID
    Given that the user has clicked the search box
    And knows the ID of the product s/he want
    And press search
    Then show product with the ID entered
