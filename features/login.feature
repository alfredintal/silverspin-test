Feature: Successful Login to saucedemo.com

  As a registered user
  I want to log in using valid credentials
  So that I can access my account and view the inventory items for sale

  Scenario: Login with valid username and password
    Given I navigate to "https://www.saucedemo.com/"
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the homepage
    And I should see a welcome message or user dashboard