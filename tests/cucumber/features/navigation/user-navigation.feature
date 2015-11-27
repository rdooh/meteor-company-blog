Feature: Navigation for Blog Owners

  As a blog owner
  I want to visit my dashboard
  So that I can edit my posts

  For now, we will just work on setting up some basic pages

  # The background will be run for every scenario
  Background:
    Given I am a blog owner

  #@focus
  Scenario: Owner tries to visit a dashboard
    When I navigate to "/dashboard"
    Then I should see the H2 heading "Dashboard"
