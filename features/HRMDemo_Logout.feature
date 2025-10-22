Feature: Logout from OrangeHRM

  Scenario: User logs out successfully
    Given I am logged in to OrangeHRM
    When I open the user dropdown and click logout
    Then I should be redirected to the login page

  Scenario: Cannot access dashboard after logout using browser back
    Given I am logged in to OrangeHRM
    When I open the user dropdown and click logout
    And I press browser back
    Then I should remain on or be redirected to the login page

  Scenario: Logout option visible in user dropdown
    Given I am logged in to OrangeHRM
    When I open the user dropdown and click logout
    # Then I should see a "Logout" option and this step is cover before the step defination
