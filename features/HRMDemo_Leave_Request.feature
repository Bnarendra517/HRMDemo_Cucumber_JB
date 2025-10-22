Feature: Leave - Apply and View Leave

  Scenario: Apply for leave successfully
    Given I am logged in to OrangeHRM
    When I navigate to Leave -> Apply
    And I select leave type "Annual Leave" from "2025-10-15" to "2025-10-16"
    And I click Apply
    Then the leave should appear in My Leave list

  Scenario: Apply leave with overlapping dates shows validation
    Given I am logged in to OrangeHRM
    When I apply for leave that overlaps existing approved leave
    Then I should see a conflict/validation message

  Scenario: Cancel a pending leave request
    Given I am logged in to OrangeHRM
    When I go to My Leave and cancel a pending leave request
    Then the leave status should change to "Cancelled"