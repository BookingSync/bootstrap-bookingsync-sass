/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-bootstrap-bookingsync-sass',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this._super.included(target);

    this.assetsPath = path.join(this.root, 'assets');

    if (process.env.EMBER_CLI_FASTBOOT) {
      this.ui.writeLine('bootstrap-bookingsync-sass: no JS enabled [FastBoot]');
    } else {
      target.import('vendor/ember-cli-bootstrap-bookingsync-sass/bookingsync/form.js');
      target.import('vendor/ember-cli-bootstrap-bookingsync-sass/bookingsync/stackable.js');
      target.import('vendor/ember-cli-bootstrap-bookingsync-sass/bookingsync/switch.js');
    }
  },

  contentFor: function(type) {
    if (type === 'head') {
      return '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,300">';
    }
  },

  treeForStyles: function(tree) {
    var stylesheetsPath = path.join(this.assetsPath, 'stylesheets');
    var assetsTree = new Funnel(this.treeGenerator(stylesheetsPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return assetsTree;
  },

  treeForVendor: function(tree) {
    var javascriptsPath = path.join(this.assetsPath, 'javascripts');
    var assetsTree = new Funnel(this.treeGenerator(javascriptsPath), {
      srcDir: '/',
      destDir: '/ember-cli-bootstrap-bookingsync-sass'
    });

    return assetsTree;
  },

  // TODO: Remove once stable.
  isDevelopingAddon: function() {
    return true;
  }
};
