


Router.route('/', function() {
	this.render('index', {to: 'main'});
});

Router.route('/about', function() {
	this.render('about', {to: 'main'});
});

Router.route('/contact', function() {
	this.render('contact', {to: 'main'});
});


Router.configure({ //used to make a default template for all routes
	layoutTemplate: 'ApplicationLayout'
});





