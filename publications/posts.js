if(Meteor.isServer){
  Meteor.publish('posts', function (ownerId) {
    return Posts.find({ownerId:ownerId}, {
      sort: { updatedAt: -1 }
    });
  });
  Meteor.publish('allposts', function () {
    return Posts.find({}, {
      sort: { updatedAt: -1 }
    });
  });
}
