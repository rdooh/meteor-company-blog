Feature: Navigation for Blog Owners

  As blog owner robdooh
  I want to visit my dashboard
  So that I can edit my posts

  For now, we will just work on setting up some basic pages

  # The background will be run for every scenario
  Background:
    Given I am a blog owner

  @focus
  Scenario: Owner tries to visit a dashboard
    When I click on sign in link
    And I enter my authentication information
    Then I should be logged in
    When I navigate to "/robdooh"
    Then I should see the H3 heading "Dashboard"
