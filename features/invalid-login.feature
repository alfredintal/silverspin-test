Feature: Invalid Login attempts

  As a user of the system
  I want to be prevented from logging in with incorrect credentials
  So that unauthorized access is not allowed

  Scenario Outline: Invalid login with incorrect username, password, or both
    Given I navigate to "https://www.saucedemo.com/"
    When I enter username "<username>" and password "<password>"
    And I click the login button
    Then I should see an error message "Invalid username or password"

    Examples:
      | username                   | password  |
      | invalid_user@test.com      | Test123!  |
      | lourdes100@test.com        | WrongPass |
      | invalid_user@test.com      | WrongPass |
