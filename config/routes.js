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


  //===============Static page routes========================

  var statics = require('../app/controllers/statics');

  //About site
  app.get('/about-site', statics.aboutSite);


  //=============Portfolion project pages========================
  app.get('/projects/localdrones', statics.localdrones);













};
