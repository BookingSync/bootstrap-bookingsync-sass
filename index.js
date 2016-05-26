/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-bootstrap-bookingsync-sass',

  contentFor: function(type) {
    if (type === 'head') {
      return '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,300">';
    }
  },

  treeForStyles: function(tree) {
    var assetsPath = path.join(this.root, 'assets', 'stylesheets');
    var assetsTree = new Funnel(this.treeGenerator(assetsPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return assetsTree;
  },

  // TODO: Remove once stable.
  isDevelopingAddon: function() {
    return true;
  }
};
