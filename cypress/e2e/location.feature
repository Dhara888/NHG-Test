Feature: Location test

    Scenario Outline: Make successful location information
        Given I make a request to get location information <countryCode>,<postCode>
        Then I verify the request status <isSuccessful>
        Examples:
            | countryCode | postCode | isSuccessful |
            | AD          | AD100    | true         |
            | AT          | 96799    | false        |
            # | VA          | 00120    | true         |
            # | ZA          | 0002     | true         |