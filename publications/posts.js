if(Meteor.isServer){
  Meteor.publish('posts', function () {
    return Posts.find({ownerId:'asdfasdfasdfads'});
  });
}
