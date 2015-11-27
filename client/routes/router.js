Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound'
});

// Default home route
Router.route('/', function () {
  this.render('home');
});
