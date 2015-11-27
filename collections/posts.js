Post = class Post {
  constructor (doc) {
    _.extend(this, doc);
  }
  datestamp() {
    let date = new Date();
    return moment(date).format('YYYY-MM-DD');
  }
}


Posts = new Meteor.Collection('posts', {
  transform: function(document)  {
    return new Post(document);
  }
});
// Probably force to server methods for interactions

PostsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title"
  },
  "description": {
    type: String,
    label: "Description"
  },
  createdAt: {
    type: Date,
    label: "Creation Date"
  },
  updatedAt: {
    type: Date,
    label: "Last Updated"
  },
  "ownerId": {
    type: String,
    label: "Post Author"
  }
});

Posts.attachSchema( PostsSchema );

if(Meteor.isClient){
  // Allow
  Posts.allow({
    insert: function(){
      // Disallow inserts on the client by default.
      return false;
    },
    update: function(){
      // Disallow updates on the client by default.
      return false;
    },
    remove: function(){
      // Disallow removes on the client by default.
      return false;
    }
  });

  // Deny
  Posts.deny({
    insert: function(){
      // Deny inserts on the client by default.
      return true;
    },
    update: function(){
      // Deny updates on the client by default.
      return true;
    },
    remove: function(){
      // Deny removes on the client by default.
      return true;
    }
  });
}
