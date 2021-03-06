Feature: Navigation for Blog Owners

  As blog owner robdooh
  I want to visit my dashboard
  So that I can edit my posts

  For now, we will just work on setting up some basic pages

  # The background will be run for every scenario
  Background:
    Given I am a blog owner

  #@focus
  Scenario: Owner tries to visit own pages after login
    When I navigate to "/"
    And I click on sign in link
    And I enter my authentication information
    Then I should be logged in
    When I navigate to "/robdooh"
    Then I should see the H1 heading "robdooh's Blog"
    And I should see a button "Create Post"
    When I navigate to "/robdooh/why-i-love-meteor"
    Then I should see the H1 heading "Why I Love Meteor"
    And I should see an edit button "Edit Post"
    And I should see a delete button "Delete Post"

  @focus
  Scenario: Owner tries to visit someone elses pages
    When I navigate to "/"
    And I click on sign in link
    And I enter my authentication information
    Then I should be logged in
    When I navigate to "/joecamel"
    Then I should see the H1 heading "joecamel's Blog"
    And I should not see a button "Create Post"
    When I navigate to "/joecamel/building-a-blog"
    Then I should see the H1 heading "Building a Blog"
    And I should not see an edit button "Edit Post"
    And I should not see a delete button "Delete Post"
