Feature: Calculator for French Taxes  Year 2020

  Calculate the taxes according to : single or married, the number of children, the mode of custody and the salary

  Scenario Outline: Calculate the Taxes
    Given my household contains <nbPerson> persons
    And we have <nbChildren> children in "<mode>" custody
    And we have a income of <income>
    When I calculate my taxes
    Then the taxes should be <taxes>

    Examples:
      | nbPerson | nbChildren | mode  | income | taxes |
      | 1        | 0          | total | 32000  | 3617  |
      | 2        | 2          | total | 55950  | 2833  |