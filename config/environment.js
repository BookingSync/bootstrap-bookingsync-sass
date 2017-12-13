/*jshint node:true*/
'use strict';

module.exports = function(environment/*, appConfig */) {
  var ENV = {
    environment: environment
  };

  ENV['ember-toggle'] = {
    includedThemes: ['light'],
    excludeBaseStyles: false,
    defaultTheme: 'light',
    defaultSize: 'small',
  };

  return ENV;
};
