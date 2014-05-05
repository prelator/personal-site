var Portfolio = require('../models/portfolio.js');


exports.index = function(req, res){
  res.render('home/index', {
    title: 'Home',
    portfolioItems: Portfolio.list
  });
};