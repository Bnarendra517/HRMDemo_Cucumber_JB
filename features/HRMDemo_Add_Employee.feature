Feature: Add Employee in PIM

  Scenario: Add a new employee with required fields only
    Given I am logged in to OrangeHRM
    When I navigate to PIM -> Add Employee
    And I enter first name "Test" and last name "User"
    And I click Save
    Then I should see the new employee personal details page

  Scenario: Add employee with create login details enabled
    Given I am logged in to OrangeHRM
    When I navigate to Add Employee
    And I fill employee name and enable create login details with username "testuser1" and password "Password@123"
    And I save
    Then the employee should be created and login credentials shown

  Scenario: Add employee with duplicate employee ID results in validation
    Given I am logged in to OrangeHRM
    When I try to add an employee with employee id "0001"
    Then I should see an error or validation preventing duplicate id
