Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};


if (Meteor.isClient) {
  Template.navigation.helpers({
    bloggers: function() {
      bloggers = Meteor.users.find({}, {fields: {username: 1}});
      if(bloggers) {
        return bloggers;
      }
    }
  });
}
