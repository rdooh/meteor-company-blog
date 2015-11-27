Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound'
});

// Default home route
Router.route('/', function () {
  this.render('home');
});



Router.route('/:blogName', function () {
  let params = this.params;
  let blogName = params.blogName;
  this.render('blog',{
    data: {
      blog: blogName
    }
  });
});
