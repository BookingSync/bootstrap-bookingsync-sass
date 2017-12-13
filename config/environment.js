/*jshint node:true*/
'use strict';

module.exports = function(environment/*, appConfig */) {
  var ENV = {
    environment: environment
  };

  ENV['ember-toggle'] = {
    includedThemes: ['light'],
    excludedThemes: ['flip', 'default', 'flip', 'ios', 'skewed', 'flat'],
    excludeBaseStyles: false,
    defaultTheme: 'light',
    defaultSize: 'small',
  };

  return ENV;
};
