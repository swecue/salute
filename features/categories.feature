Feature: Choose search categories   
  As a user of Systembolagets online shop   
  In order to find beverages to buy   
  I want to be able to filter for beverages in categories       

  
  Scenario Outline: Filter products by category and/or country  
    Given that I am on the     
    When I choose category "<category>" in the list
    And choose origin "<country>"  
    Then I should get a list with the products that relate to the category and country I choosed      

    Examples:     
    | category    | country  |     
    | vitt vin    | Spanien  |     
    | rött vin    | Frankrike|     
    | alkoholfritt| Sverige  |     
    | öl          | undefined|


