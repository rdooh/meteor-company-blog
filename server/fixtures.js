
Meteor.startup(function(){
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: 'rob@company.com',
      password: 'rob',
      _id: 'asdfasdfasdfads'
    });
    Accounts.createUser({
      email: 'joe@company.com',
      password: 'joe',
      _id: 'jgjgjhgjhghgkjh'
    });
  }

  if (Posts.find().count() === 0) {
    Posts.insert({
      "title": 'Why I Love Meteor',
      "description": 'This is a cool blog post',
      createdAt: ( new Date(2015, 3, 14 ).getTime() / 1000 ),
      updatedAt: ( new Date(2015, 5, 18 ).getTime() / 1000 ),
      "ownerId": 'asdfasdfasdfads'
    });
  }
});
