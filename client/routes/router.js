Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound'
});

// Default home route
Router.route('/', function () {
  this.render('home',{
    data: {
      blogs: Meteor.users.find({}, {fields: {username: 1}})
    }
  });
});


Router.route('/:blog', {
  name: 'blog',
  subscriptions: function() {
    // add the subscription to the waitlist
    this.subscribe('blog', this.params.blog).wait();
    this.subscribe('posts').wait();
  },
  action: function () {
    let params = this.params;
    let blog = params.blog;
    // look up the blog username
    let blogOwner = Meteor.users.findOne({username: blog});
    if (blogOwner) {
      this.render('blog',{
        data: {
          blogOwner: blogOwner.username,
          posts: function(){
            return Posts.find({ownerId:'asdfasdfasdfads'});
          }
        }
      });
    }else{
      this.layout('notFound');
      this.next();
    }
  }
});
