Feature: Product search box function
As a user of Systembolagets online shop
In order to find my desired product
I want to be able to search for keywords to find it

Scenario: User wants to find a product
    Given that the user is on web page
    And that the user then has entered characters in the search box.
    When the user clicks the search button
    Then products matching the searchstring are displayed in the search result html page.
