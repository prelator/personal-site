module.exports = {

  aboutSite: function(req, res) {
    res.render('statics/about-site', {
      title: 'About Site'
    });
  },

  localdrones: function(req, res) {
    res.render('statics/localdrones', {
      title: 'Local Drones',
      category: 'NodeJS'
    });
  },

  fairusecalculator: function(req, res) {
    res.render('statics/fair-use-calculator', {
      title: 'Fair Use Calculator',
      category: 'Client-side Javascript'
    });
  },

  fairusetube: function(req, res) {
    res.render('statics/fairusetube', {
      title: 'FairUseTube.org',
      category: 'Joomla CMS'
    });
  },

  quotify: function(req, res) {
    res.render('statics/quotify', {
      title: 'Quotify',
      category: 'Client-side Javascript'
    });
  },

  skyrim: function(req, res) {
    res.render('statics/skyrim', {
      title: 'Gold of Skyrim',
      category: 'Client-side Javascript'
    });
  },

  madmetrics: function(req, res) {
    res.render('statics/mad-metrics', {
      title: 'Mad Metrics',
      category: 'Client-side Javascript'
    });
  },

  amvcontest: function(req, res) {
    res.render('statics/amv-contest', {
      title: 'AMV Contest',
      category: 'NodeJS'
    });
  },

  handlebarsstore: function(req, res) {
    res.render('statics/handlebars-store', {
      title: 'Handlebars Store',
      category: 'Client-side Javascript'
    });
  },

  burritoking: function(req, res) {
    res.render('statics/burrito-king', {
      title: 'Burrito King',
      category: 'Client-side Javascript'
    });
  },

  clock: function(req, res) {
    res.render('statics/clock', {
      title: 'Clock',
      category: 'Client-side Javascript'
    });
  }



};