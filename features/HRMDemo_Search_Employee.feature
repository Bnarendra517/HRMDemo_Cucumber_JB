Feature: Search Employee in PIM

  Scenario: Search existing employee by name
    Given I am logged in to OrangeHRM
    When I go to PIM -> Employee List
    And I search for employee name "Linda"
    Then results should include "Linda" in the list

  Scenario: Search by employee ID
    Given I am logged in to OrangeHRM
    When I search for employee id "001"
    Then I should see matching records or "No Records Found" if none exist

  Scenario: Filters combination (name + job title)
    Given I am logged in to OrangeHRM
    When I apply filters name "Linda" and job title "QA Engineer"
    Then the result should match both filters