// Route configuration
Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound' //TODO: make this a wrapper
});


// Default home route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home',{
      data: {
        blogs: Meteor.users.find({}, {fields: {username: 1}})
        }
      }
    );
  }
});


// Default home route
Router.route('/create', {
  name: 'create',
  action: function () {
    this.render('createPost',{
      data: function() {
        let blogOwner = Meteor.user();
        if (blogOwner) {
          return blogOwner;
        }
      }
    });
  }
});



// Default home route
Router.route('/edit/:id', {
  name: 'editPost',
  action: function () {
    this.render('editPost',{
      data: function() {
        let blogOwner = Meteor.user();
        if (blogOwner) {
          return blogOwner;
        }
      }
    });
  }
});






// Reusable base controller
BlogController = RouteController.extend({
  subscriptions: function() {
    this.subscribe('blog', this.params.blog).wait();
  },
  action: function () {
    this.render('blogWrapper',{
      data: function() {
        let blogOwner = Meteor.users.findOne({username: this.params.blog});
        if (blogOwner) {
          return blogOwner;
        }
      }
    });
  }
});

// Use the controller
Router.route('/:blog', {
  name: 'blog',
  controller: 'BlogController'
});



// Reusable base controller
PostController = RouteController.extend({
  subscriptions: function() {
    this.subscribe('blog', this.params.blog).wait();
    this.subscribe('allposts').wait();
  },
  action: function () {
    this.render('post',{
      data: function() {
        let blogOwner = Meteor.users.findOne({username: this.params.blog});
        let post = Posts.findOne({slug: this.params.post});
        if (blogOwner) {
          if (post) {
            let dataset = {
              blogOwner: blogOwner,
              post: post
            }
            return dataset;
          }
        }
      }
    });
  }
});


Router.route('/:blog/:post', {
  name: 'blog.post',
  controller: 'PostController'
});





let requireLogin = function() {
  if (! Meteor.user()) {
    Router.go('home');
  } else {
    this.next();
  }
}
Router.onBeforeAction(requireLogin, {only: 'create'});
