if (Meteor.isClient) {

  Meteor.subscribe('allposts'); // this is already done - look into refactor

  Template.editPost.helpers({
    postSlugPreview: function () { return Session.get('postSlugPreview'); },
    blogOwner: function() {
      return Meteor.user().username;
    }
  });


  Template.editPost.events({
    'keyup #title': function(event) {
      let inputTitle = $(event.target).val();
      let postSlugPreview = App.Utils.formatSlug(inputTitle);
      Session.set('postSlugPreview',postSlugPreview);
    },
    'click #submitEditedPost': function(e, t) {
      if(Meteor.user()){
        let username = Meteor.user().username;
        // target form for data
        let title = t.find('#title').value;
        let slug = App.Utils.formatSlug(title);
        let description = t.find('#description').value;
        let content = t.find('#content').value;
        if (title !== '') {
          let postData = {
            '_id': this._id,
            'title': title,
            'slug': slug,
            'description': description,
            'content': content
          }
          Meteor.call('editPost', postData, function(error, result) {
            // display the error to the user and abort
            if (error)
              return alert(error.reason);
            Router.go('/'+username+'/'+slug);
          });
        }
      };
    }
  });
}
