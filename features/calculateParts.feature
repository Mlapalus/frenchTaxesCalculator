Feature: Calculate the parts for one household

  Use to calculate the number of parts per household

  Scenario Outline: Calcul parts depends of household, persons and children, and alternating custody
    Given <nbHousehold> household with <nbPerson> person and <nbChildren> children in "<custody>" mode
    When I calculate the number of parts
    Then The result should be <nbParts> parts

    Examples:
      | nbHousehold | nbPerson | nbChildren | custody     | nbParts |
      | 1           | 1        | 0          | total       | 1       |
      | 1           | 1        | 1          | total       | 1.5     |
      | 1           | 1        | 2          | total       | 2       |
      | 1           | 1        | 3          | total       | 3       |
      | 1           | 1        | 4          | total       | 4       |
      | 1           | 2        | 0          | total       | 2       |
      | 1           | 2        | 1          | total       | 2.5     |
      | 1           | 2        | 2          | total       | 3       |
      | 1           | 2        | 3          | total       | 4       |
      | 1           | 2        | 4          | total       | 5       |
      | 1           | 2        | 5          | total       | 6       |
      | 1           | 2        | 1          | alternating | 2.25    |
      | 1           | 2        | 2          | alternating | 2.5     |
      | 1           | 2        | 3          | alternating | 3       |
      | 1           | 2        | 4          | alternating | 3.5     |
      | 1           | 2        | 5          | alternating | 4       |
      | 1           | 1        | 1          | alternating | 1.25    |
      | 1           | 1        | 2          | alternating | 1.5     |
      | 1           | 1        | 3          | alternating | 2       |
      | 1           | 1        | 4          | alternating | 2.5     |
      | 1           | 1        | 5          | alternating | 3       |




