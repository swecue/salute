Feature: As a user I want to be able to go to all different pages on the web site to be able to see the information I´m looking for


  Scenario: Go from start page to product page
      Given that the user is on the start page 
      When he clicks on the products link in the top of the page
      Then the products page will open 

   Scenario: Go from product page to contact page
      Given that you are on the products page 
      When you click on the contact link in the navbar
      Then the Contact page will open 

   Scenario: Go from contact page to product page
      Given that the user is on the contact page 
      When he clicks on the about us link in the navbar
      Then the About us page will open 