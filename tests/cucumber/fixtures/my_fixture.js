(function () {

  'use strict';
  let currentUserId = 'asdfasdfasdfads'
  Meteor.methods({
    'reset' : function() {
      // you can do some resetting of your app here
      // fixture code will only execute inside mirrors neither runs
      // inside the main app nor gets bundled to production.
    },
    'addUsers': function () {
      Meteor.users.remove({});

      Accounts.createUser({
        email: 'robdooh@company.com',
        password: 'rob',
        username: 'robdooh',
        _id: 'asdfasdfasdfads'
      });

      Accounts.createUser({
        email: 'joecamel@company.com',
        password: 'joe',
        username: 'joecamel',
        _id: 'jgjgjhgjhghgkjh'
      });
    },
    'addPost': function () {
      Posts.remove({});
      Posts.insert({
        "title": 'Why I Love Meteor',
        "description": 'This is a cool blog post',
        createdAt: ( new Date(2015, 3, 14 ).getTime() / 1000 ),
        updatedAt: ( new Date(2015, 5, 18 ).getTime() / 1000 ),
        "ownerId": currentUserId
      });
    }
  });



})();
