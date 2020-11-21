Feature: Calculate the tax household

    Use to calculate the the tax household to calculate french taxes
    Scenario Outline: Tax household
        Given I am a foyer with <nbPerson> person with "<status>"
        When I want calculate my tax household
        Then the result should be <household>

        Examples:
            | nbPerson | status       | household |
            | 2        | married      | 1         |
            | 2        | PACS         | 1         |
            | 2        | cohabitation | 2         |
            | 1        | single       | 1         |




