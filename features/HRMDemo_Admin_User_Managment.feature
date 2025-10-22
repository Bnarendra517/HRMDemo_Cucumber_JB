Feature: Admin - System Users Management

  Scenario: Add a new system user
    Given I am logged in as Admin
    When I navigate to Admin -> User Management -> Users
    And I click Add, fill required user details and save
    Then the new user should appear in the users list

  Scenario: Search user by username
    Given I am logged in as Admin
    When I search for username "Admin"
    Then the results should include user "Admin"

  Scenario: Edit user role and status
    Given I am logged in as Admin
    When I edit user "testuser1" to change role to "ESS" and status to "Enabled"
    Then changes should be saved and visible in the users list