
if (Meteor.isClient) {
  Template.blog.helpers({
    ownBlog: function() {
      return this._id === Meteor.userId();
    },
    blogName: function() {
      return this.username + "'s Blog";
    }
  });
}
