Post = class Post {
  constructor (doc) {
    _.extend(this, doc);
  }
}


Posts = new Meteor.Collection('posts', {
  transform: function(document)  {
    let newPost = new Post(document);
    return newPost;
  }
});


PostsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'Title'
  },
  'slug': {
    type: String,
    label: 'Slug'
  },
  'description': {
    type: String,
    label: 'Description'
  },
  'content': {
    type: String,
    label: 'Content'
  },
  createdAt: {
    type: Date,
    label: 'Creation Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  updatedAt: {
    type: Date,
    label: 'Last Updated',
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
  'ownerId': {
    type: String,
    label: 'Post Author'
  }
});

Posts.attachSchema( PostsSchema, {transform: true} );




// TODO: for CUD, force to server methods for interactions
if(Meteor.isClient){
  // Allow
  Posts.allow({
    insert: function(){
      // allow if anyone logged in
      return true;
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
      return false;
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


Meteor.methods({
  createPost: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      slug: String,
      description: String,
      content: String
    });
    let post = _.extend(postAttributes, {
      ownerId: Meteor.userId()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }
});
