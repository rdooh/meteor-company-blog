Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound'
});

// Default home route
Router.route('/', function () {
  this.render('home');
});


Router.route('/:blog', function () {
  let params = this.params;
  let blog = params.blog;
  // look up the blog username
  //
  let blogOwner = Meteor.users.findOne({username: blog});

  if (blogOwner) {

    // console.log('blogowner',blogOwner.username);
    this.render('blog',{
      data: {
        blogOwner: blogOwner.username
      }
    });
  }else{
    this.redirect('/');
  }
  //
  //
});
