Feature: Login validation for empty fields

  As a user of the system
  I want to be notified when I try to log in without filling required fields
  So that I understand what is missing

  Scenario Outline: Invalid login with blank username, password, or both
    Given I navigate to "https://www.saucedemo.com/"
    When I enter username "<username>" and password "<password>"
    And I click the login button
    Then I should see an error message "Username and password are required"

    Examples:
      | username                  | password  |
      |                           | Test123!  |
      | lourdes100@test.com       |           |
      |                           |           |
