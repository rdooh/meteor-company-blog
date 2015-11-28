Feature: Navigation for Blog Owners

  As blog owner robdooh
  I want to visit my dashboard
  So that I can edit my posts

  For now, we will just work on setting up some basic pages

  # The background will be run for every scenario
  Background:
    Given I am a blog owner

  #@focus
  Scenario: Owner tries to visit own page after login
    When I click on sign in link
    And I enter my authentication information
    Then I should be logged in
    When I navigate to "/robdooh"
    Then I should see the H2 heading "robdooh's Blog"
    And I should see a button "Create Post"

  #@focus
  Scenario: Owner tries to visit a specific blog post
    When I click on sign in link
    And I enter my authentication information
    Then I should be logged in
    When I navigate to "/robdooh/why-i-love-meteor"
    Then I should see the H2 heading "Introduction"
    And I should see a button "Edit Post"
