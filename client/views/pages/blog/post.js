if (Meteor.isClient) {
  Template.post.helpers({
    ownPost: function() {
      if(this.post){
        return this.post.ownerId === Meteor.userId();
      }
    }
  });

  Template.post.events({
    'click #deletePost': function() {
      Meteor.call('deletePost', this.post._id, function(error, result) {
        // display the error to the user and abort
        if (error)
          return alert(error.reason);
        Router.go('/'+Meteor.user().username);
      });
    }
  });

};
