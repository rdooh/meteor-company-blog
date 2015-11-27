Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound'
});

// Default home route
Router.route('/', function () {
  this.render('home');
});



Router.route('/:blogOwner', function () {


  let params = this.params;
  let blogOwner = params.blogOwner;
  // look up the blog username
  // 
  this.render('blog',{
    data: {
      blogOwner: blogOwner
    }
  });
});
