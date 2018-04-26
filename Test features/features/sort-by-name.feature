Feature: Sort all products by name

    Scenario: Searching by name
        Given that the user chooses "red wine"
        When the user presses search
        Then only products with the name "red wine" should be shown

    Scenario: Searching by alphabetical order
        Given that the user chooses to search by the letter "a"
        When the user presses search
        Then the user should only be presented with products starting with the letter "a"

        Scenario: Searching for a name/letter that does not exist
        Given that the user chooses to search for a non valid product name
        When the user presses search
        Then the user should be presented with a message telling the user "Sorry no product with that name"
