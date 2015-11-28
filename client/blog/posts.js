

if (Meteor.isClient) {
  Template.posts.helpers({
    ownerSlug: function () {
      return Template.parentData(1).blogOwner;
    }
  });
};
