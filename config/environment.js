/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pwabuilder-site',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy:  {
        'connect-src': "'self' http://localhost:3000 http://0.0.0.0:3000 ws://localhost:3000 ws://localhost:4200",
        'img-src': "'self' http://www.google-analytics.com",
        'script-src': "'self' 'unsafe-inline' 'unsafe-eval' localhost:35729 0.0.0.0:35729 http://www.google-analytics.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_URL='http://localhost:3000';
    ENV.APP.IMAGEGENERATOR_URL = 'http://localhost:49080/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.API_URL='http://testserver';
    ENV.APP.IMAGEGENERATOR_URL = 'http://localhost:49080/';
  }

  if (environment === 'preproduction') {
    ENV.APP.API_URL='//manifold-api-pre.azurewebsites.net';
    ENV.APP.IMAGEGENERATOR_URL = '//appimagegenerator-pre.azurewebsites.net';
  }

  if (environment === 'production') {
    ENV.APP.API_URL='//manifold-api-prod.azurewebsites.net';
    ENV.APP.IMAGEGENERATOR_URL = '//appimagegenerator-prod.azurewebsites.net';
  }

  return ENV;
};
