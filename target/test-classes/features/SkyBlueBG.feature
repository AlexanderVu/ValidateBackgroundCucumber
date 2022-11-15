@Backgroundtest @Regression
Feature: Change background color functionality validation

  Scenario Outline: Sky Blue Background
    Given "<color1>" button exist
    When I click on the "<button>"
    Then the background color will change to "<bgColor>"

    Examples: 
      | color1  | button  | bgColor |
      | skyblue | skyblue | skyblue |
      | white   | white   | white   |
