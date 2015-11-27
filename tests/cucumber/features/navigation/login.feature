Feature: Allow blog owners to login and logout

  As a blog owner
  I want to login and logout
  So that I can prove my identity and see account info

  Background:
    Given I am on the home page

  #@focus
  Scenario: A user can login with valid information
    When I click on sign in link
    And I enter my authentication information
    Then I should be logged in

  #@focus
  Scenario: A user cannot login with bad information
    When I click on sign in link
    And I enter incorrect authentication information
    Then I should see a user not found error
