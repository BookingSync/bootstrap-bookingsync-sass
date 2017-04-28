/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var BroccoliMergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-bootstrap-bookingsync-sass',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this._super.included(target);

    this.assetsPath = path.join(this.root, 'assets');
    this.vendorPath = path.join('vendor', 'ember-cli-bootstrap-bookingsync-sass');
    this.vendorJavascriptsPath = path.join(this.vendorPath, 'javascripts', 'bookingsync');

    if (process.env.EMBER_CLI_FASTBOOT) {
      this.ui.writeLine('bootstrap-bookingsync-sass: no JS enabled [FastBoot]');
    } else {
      target.import(path.join(this.vendorJavascriptsPath, 'form.js'));
      target.import(path.join(this.vendorJavascriptsPath, 'stackable.js'));
      target.import(path.join(this.vendorJavascriptsPath, 'switch.js'));
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
    var javascriptsTree = new Funnel(this.treeGenerator(javascriptsPath), {
      srcDir: '/',
      destDir: '/ember-cli-bootstrap-bookingsync-sass/javascripts'
    });

    var vendorTrees = new BroccoliMergeTrees([javascriptsTree]);

    return vendorTrees;
  },

  // TODO: Remove once stable.
  isDevelopingAddon: function() {
    return true;
  }
};
