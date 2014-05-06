module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

  //Contact form
  var contact = require('../app/controllers/contact');
  app.post('/contact/submit-form', contact.sendMessage);

  //Blog
  var blog = require('../app/controllers/blog');
  app.get('/blog', blog.main);


//=============== Static page routes ========================

  var statics = require('../app/controllers/statics');

  //About site
  app.get('/about-site', statics.aboutSite);


  //==== Portfolio project pages =====
  app.get('/projects', function(req, res) {
    res.redirect('/#section-works');
  });

  app.get('/projects/localdrones', statics.localdrones);
  
  app.get('/projects/fair-use-calculator', statics.fairusecalculator);

  app.get('/projects/fairusetube', statics.fairusetube);

  app.get('/projects/quotify', statics.quotify);

  app.get('/projects/gold-of-skyrim', statics.skyrim);

  app.get('/projects/mad-metrics', statics.madmetrics);

  app.get('/projects/amv-contest', statics.amvcontest);

  app.get('/projects/handlebars-store', statics.handlebarsstore);

  app.get('/projects/burrito-king', statics.burritoking);

  app.get('/projects/clock', statics.clock);




};
