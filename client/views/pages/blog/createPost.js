if (Meteor.isClient) {

  Meteor.subscribe('allposts'); // this is already done - look into refactor

  Template.createPost.helpers({
    // inputTitle: function () { return Session.get('inputTitle'); },
    postSlugPreview: function () { return Session.get('postSlugPreview'); }
  });


  Template.createPost.events({
    'keyup #title': function(event) {
      console.log('test');
      let inputTitle = $(event.target).val();
      console.log(inputTitle);
      let postSlugPreview = App.Utils.formatSlug(inputTitle);
      Session.set('postSlugPreview',postSlugPreview);
    },
    'click button': function(e, t) {
      if(Meteor.user()){
        let ownerId = Meteor.userId();
        let username = Meteor.user().username;
        // target form for data
        let title = t.find('#content');
        let slug = App.Utils.formatSlug(title);
        let description = t.find('#description');
        let content = t.find('#content');
        if (title !== '') {
          // as long as there's a title, insert
          Posts.insert({
            'title': title,
            'slug': slug,
            'description': description,
            'content': content,
            'ownerId': ownerId
          });
        }
        return Router.go('/'+username+'/'+slug);
      }
    }


  });
}
