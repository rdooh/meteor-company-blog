Router.configure({
  layoutTemplate: 'main'
});

// Default home route
Router.route('/', function () {
  this.render('home');
});
