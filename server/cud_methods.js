if (Meteor.isClient) {

  Meteor.subscribe("allposts"); // this is already done - look into refactor

  Template.postForm.events({
    "click button": function(e, t) {
      let ownerId = Meteor.user() ? Meteor.userId() : null;
      let username = Meteor.user().username;
      // target form for data
      let title = t.find("#content");
      let slug = App.Utils.formatSlug(title);
      let description = t.find("#description");
      let content = t.find("#content");
      if (title !== "") {
        Posts.insert({
          "title": title,
          "slug": slug,
          "description": description,
          "content": content,
          "ownerId": ownerId
        });
      }
      return Router.go('/'+username+'/'+slug);
    }
  });

}
