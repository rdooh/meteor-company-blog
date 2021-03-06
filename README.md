# Meteor Company, Inc. Blog

## Overview
Create a blogging app that is available to view before signing in. Each user will have their own blog. Each blog entry will consist of: Title, Description, Date/Time, User. Each user can have CUD functionality after signing in.

## Scenario
This is a developer blog for Company, Inc. that allows each developer to have their own personal blogging space.

## Rough Spec
blogs will be listed according to username (e.g. /rdooh/)
blog posts will be listed on the username (personal) page (e.g. /rdooh/)
blog post addresses will be readable, and sub to the username (e.g. /rdooh/why-I-love-meteor)
when logged in, you will get access to some edit/delete buttons beside your listed posts on your personal page
when logged in, you will have a create button on your personal page
when logged in, you may have some extra buttons on the top bar

## Work Plan

### START WORK
- [x] basic setup
  - [x] basic dev environment
  - [x] basic planning
- [x] set up basic accounts
  - [x] add packages for basic password accounts
  - [x] add login buttons
  - [x] set up some seed data
- [x] set up basic collections
  - [x] posts
  - [x] augment user
  - [x] set up some basic tests
  - [x] set up some seed data
- [x] set up simple pages for testing output to screen
  - [x] set up some basic e2e tests
  - [x] plan the page templates - simple
- [x] set up schemas
  - [x] clean up some tests
  - [x] work on fixtures
  - [x] work on schemas
- [x] Improve Read
  - [x] templates to better reflect data
  - [x] routes logic improvements
  - [x] transfer to subscriptions
- [x] Major UI rework
  - [x] add assets
  - [x] solve test regressions
  - [x] add new tests
  - [x] plan templates for revision
  - [x] complete majority

- [x] CUD
  - [x] set up methods
  - [x] set up some tests
  - [x] wire to UI

### END WORK


## Possible Refactoring

- [ ] recast collection documents as domain object class instances (try es2015)
  - tests?
- [ ] set up basic CRUD operations, attached to the domain objects
  - tests?
- [ ] security concerns for domain objects
  - tests?
- [ ] work on accounts and roles
  - tests?
- [ ] structure application
  - [ ] use the package pattern for the app?
