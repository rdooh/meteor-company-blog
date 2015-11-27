Feature: Navigation for All Visitors

  As a guest
  I want to visit any blog page
  So that I can get the latest news

  For now, we will just work on setting up some basic pages

  # The background will be run for every scenario
  Background:
    Given I am a guest
    

  @focus
  Scenario: Guest visits home page of the blog host
    When I navigate to "/"
    Then I should see the title "Company, Inc. Blog"
    And I should see the H2 heading "All Blogs"

  # This scenario will not run as part of the Meteor dev cycle because it does not have the @focus
  # tag, but it will run on CI if you use `meteor --test` for instance
  @focus
  Scenario: Guest tries to visit a page that does not exist
    When I navigate to "/brokenlink"
    Then I should see the H2 heading "404"


#  @focus
#  Scenario: Guest tries to visit a dashboard
#    When I navigate to "/robdooh/edit"
#    Then I should see the H2 heading "All Blogs"

  @focus
  Scenario: Guest tries to visit a specific blog
    When I navigate to "/robdooh"
    Then I should see the H2 heading "Rob's Blog"


  @focus
  Scenario: Guest tries to visit a specific blog post
    When I navigate to "/robdooh/introduction"
    Then I should see the H2 heading "Introduction"
