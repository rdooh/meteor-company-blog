if (Meteor.isClient) {
  Template.post.helpers({
    ownPost: function() {
      if(this.post){
        return this.post.ownerId === Meteor.userId();
      }
    }
  });
};
