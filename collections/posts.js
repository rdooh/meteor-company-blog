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


Meteor.methods({
  createPost: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      slug: String,
      description: String,
      content: String
    });

    let timestamp = moment().format('X');
    // prevent duplicate slugs
    let postWithSameLink = Posts.findOne({slug: postAttributes.slug});


    if (postWithSameLink) {
      postAttributes.slug += timestamp;
    }
    let post = _.extend(postAttributes, {
      ownerId: Meteor.userId()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  },


  deletePost: function(postId) {
    check(Meteor.userId(), String);
    check(postId, String);
    let post = Posts.findOne(postId);
    if(post){
      if(post.ownerId === Meteor.userId()) {
        let success = Posts.remove(postId);
        return success;
      }
    }
  },


  editPost: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      _id: String,
      title: String,
      slug: String,
      description: String,
      content: String
    });

    // prevent duplicate slugs
    let postWithSameLink = Posts.findOne({slug: postAttributes.slug});
    if (postWithSameLink) {
      let timestamp = moment().format('X');
      postAttributes.slug += timestamp;
    }
    let post = _.extend(postAttributes, {
      ownerId: Meteor.userId()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }



});
