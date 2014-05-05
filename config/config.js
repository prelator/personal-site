var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'personal-site'
    },
    port: 3000,
    db: 'mongodb://localhost/personal-site-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'personal-site'
    },
    port: 3000,
    db: 'mongodb://localhost/personal-site-test'
  },

   production: {
    root: rootPath,
    app: {
      name: 'patrickmckay'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOHQ_URL
  }
};

module.exports = config[env];
