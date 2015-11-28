if(Meteor.isServer){
  Meteor.publish('blog', function (blog) {
    return Meteor.users.find({username: blog});
  });
}
