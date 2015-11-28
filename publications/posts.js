if(Meteor.isServer){
  Meteor.publish('posts', function (ownerId) {
    return Posts.find({ownerId:ownerId}, {
      sort: { createdAt: -1 }
    });
  });
  Meteor.publish('allposts', function () {
    return Posts.find({}, {
      sort: { createdAt: -1 }
    });
  });
}
