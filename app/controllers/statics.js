module.exports = {

  aboutSite: function(req, res) {
    res.render('statics/about-site', {
      title: 'About Site'
    });
  },

  localdrones: function(req, res) {
    res.render('statics/localdrones', {
      title: 'Local Drones'
    });
  }



};