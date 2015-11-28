

if (Meteor.isClient) {
  Template.posts.helpers({
    ownerSlug: function () {
      return Template.parentData(1).username;
    },
    posts: function(ownerId){
      return Posts.find({ownerId:ownerId});
    },
    postSlug: function(postTitle) {
      let slug = App.Utils.formatSlug(postTitle);
      return slug;
    }
  });
};
