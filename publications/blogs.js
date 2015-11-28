if(Meteor.isServer){
  Meteor.publish('blog', function () {
    return Meteor.users.find({});
  });
}
