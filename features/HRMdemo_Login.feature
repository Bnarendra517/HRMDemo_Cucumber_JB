Feature: Login to OrangeHRM
@smoke
  Scenario: Successful login with valid credentials
    Given I open the OrangeHRM login page
    When I enter username and password
    And I click on the login button
    Then I should see the dashboard page

  Scenario: Unsuccessful login with invalid credentials
    Given I open the OrangeHRM login page 
    When I enter username "invalid" and password "invalid"
    And I click on the login button
    Then I should see an error message containing "Invalid credentials"

  Scenario: Blank username and password validation
    Given I open the OrangeHRM login page
    When I click on the login button without entering credentials
    Then I should see validation messages "Required" for username and password

  Scenario: Leading/trailing spaces in username are trimmed
    Given I open the OrangeHRM login page
    When I enter username "  Admin  " and password "admin123"
    And I click on the login button
    Then I should see the dashboard page

  Scenario: Forgot password link navigates to reset page
    Given I open the OrangeHRM login page
    When I click on the "Forgot your password?" link
    Then I should see the Reset Password page
