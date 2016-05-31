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
    this.vendorFontsPath = path.join(this.vendorPath, 'fonts', 'bookingsync');

    if (process.env.EMBER_CLI_FASTBOOT) {
      this.ui.writeLine('bootstrap-bookingsync-sass: no JS enabled [FastBoot]');
    } else {
      target.import(path.join(this.vendorJavascriptsPath, 'form.js'));
      target.import(path.join(this.vendorJavascriptsPath, 'stackable.js'));
      target.import(path.join(this.vendorJavascriptsPath, 'switch.js'));
    }

    target.import(path.join(this.vendorFontsPath, 'bookingsync-smiles.eot'),   { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-smiles.svg'),   { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-smiles.ttf'),   { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-smiles.woff'),  { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-smiles.woff2'), { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-icons.eot'),    { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-icons.svg'),    { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-icons.ttf'),    { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-icons.woff'),   { destDir: '/fonts/bookingsync' });
    target.import(path.join(this.vendorFontsPath, 'bookingsync-icons.woff2'),  { destDir: '/fonts/bookingsync' });
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

    var fontsPath = path.join(this.assetsPath, 'fonts');
    var fontsTree = new Funnel(this.treeGenerator(fontsPath), {
      srcDir: '/',
      destDir: '/ember-cli-bootstrap-bookingsync-sass/fonts'
    });

    var vendorTrees = new BroccoliMergeTrees([javascriptsTree, fontsTree]);

    return vendorTrees;
  },

  // TODO: Remove once stable.
  isDevelopingAddon: function() {
    return true;
  }
};
