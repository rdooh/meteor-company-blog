(function () {

  'use strict';
  let currentUserId = 'asdfasdfasdfads'
  Meteor.methods({
    'reset' : function() {
      // you can do some resetting of your app here
      // fixture code will only execute inside mirrors neither runs
      // inside the main app nor gets bundled to production.
    },
    'addUser': function (opts) {
      Meteor.users.remove({});
      Accounts.createUser({
        email: opts.email,
        password: opts.password ? opts.password : "test",
        username: opts.username,
        _id: currentUserId
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
