Feature: Calculate taxes
  The app should calculate french taxes

  Scenario: Single person with 32k
    Given 1 person has an income of 32000 and 1 part
    When he uses the calculator
    Then taxes should be 3617

  Scenario: Couple with 2 children and with 55k
    Given 2 persons has an income of 55950 and 3 parts
    When he uses the calculator
    Then taxes should be 2833