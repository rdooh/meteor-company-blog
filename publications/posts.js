if(Meteor.isServer){
  Meteor.publish('posts', function (ownerId) {
    return Posts.find({ownerId:ownerId});
  });
  Meteor.publish('allposts', function () {
    return Posts.find();
  });
}
