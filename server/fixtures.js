
Meteor.startup(function(){

  // Set up Initial Users
  if (Meteor.users.find().count() === 0) {
    // Set User 1
    let rob = Meteor.users.insert({
      username: 'robdooh',
      _id: 'asdfasdfasdfads'
    });
    Accounts.setPassword(rob, 'rob');
    Accounts.addEmail(rob, 'robdooh@company.com', true);
    // Set User 2
    let joe = Meteor.users.insert({
      username: 'joecamel',
      _id: 'jgjgjhgjhghgkjh'
    });
    Accounts.setPassword(joe, 'joe');
    Accounts.addEmail(joe, 'joecamel@company.com', true);
  }

  // Set up Initial Posts
  if (Posts.find().count() === 0) {
    Posts.insert({
      "title": 'Why I Love Meteor',
      "slug": 'why-i-love-meteor',
      "description": 'This is a cool blog post',
      "ownerId": 'asdfasdfasdfads'
    });
    Posts.insert({
      "title": 'Super Post',
      "slug": 'super-post',
      "description": 'This is another cool blog post',
      "ownerId": 'asdfasdfasdfads'
    });
    Posts.insert({
      "title": 'Building a Blog',
      "slug": 'building-a-blog',
      "description": 'The story of this blog',
      "ownerId": 'jgjgjhgjhghgkjh'
    });
  }
});
