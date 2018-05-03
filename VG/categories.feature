Feature: Choose search categories   
  As a user of Systembolagets online shop   
  In order to find beverages to buy   
  I want to be able to filter for beverages in categories       



  Scenario Outline: A product should be searchable by category and country of origin
    Given that the user is on the webpage
    When we search for a product by category "<category>" and/or country "<country>"
    Then we should get lists with the products that relate to the information we searched for
    
    Examples:     
    | category    | country  |     
    | vitt vin    | Spanien  |     
    | rött vin    | Frankrike|     
    | alkoholfritt| Sverige  |     
    | öl          | undefined|
    
  
  Scenario Outline: A product should be searchable by category and country of origin
    Given that the user is on the webpage
    When we search for a product by categery "<category>" and/or country "<country>" that doesn't exist
    Then we should get an error saying this is not a category

    Examples:
    | category    | country  |
    | saft        | Sverige  |
    | white       | USA      |
    | rött vin    | Fuskland |
