'use strict';

module.exports = function(environment/* , appConfig */) {
  let ENV = {
    environment
  };

  ENV['ember-toggle'] = {
    includedThemes: ['light'],
    excludeBaseStyles: false,
    defaultTheme: 'light',
    defaultSize: 'medium'
  };

  return ENV;
};
