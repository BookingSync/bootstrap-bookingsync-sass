'use strict';

let path = require('path');
let Funnel = require('broccoli-funnel');
let BroccoliMergeTrees = require('broccoli-merge-trees');
let VersionChecker = require('ember-cli-version-checker');

let checker = new VersionChecker(this);
let emberCliVersion = checker.for('ember-cli');

module.exports = {
  name: 'ember-cli-bootstrap-bookingsync-sass',

  included: function(app, parentAddon) {
    let target = (parentAddon || app);
    this._super.included(target);

    this.assetsPath = path.join(this.root, 'assets');
    this.vendorPath = path.join('vendor', 'ember-cli-bootstrap-bookingsync-sass');
    this.vendorJavascriptsPath = path.join(this.vendorPath, 'javascripts', 'bookingsync');

    if (process.env.EMBER_CLI_FASTBOOT) {
      this.ui.writeLine('bootstrap-bookingsync-sass: no JS enabled [FastBoot]');
    } else {
      target.import(path.join(this.vendorJavascriptsPath, 'form.js'));
      target.import(path.join(this.vendorJavascriptsPath, 'stackable.js'));
      this._importSweetAlert(target);
      target.import(path.join(this.root, 'vendor', 'shims', 'sweetalert.js'));
    }
  },

  contentFor: function(type) {
    if (type === 'head') {
      return '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,300">';
    }
  },

  treeForStyles: function(tree) {
    let stylesheetsPath = path.join(this.assetsPath, 'stylesheets');
    let assetsTree = new Funnel(this.treeGenerator(stylesheetsPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return assetsTree;
  },

  treeForVendor: function(tree) {
    let javascriptsPath = path.join(this.assetsPath, 'javascripts');
    let vendorTrees = [];
    let javascriptsTree = new Funnel(this.treeGenerator(javascriptsPath), {
      srcDir: '/',
      destDir: '/ember-cli-bootstrap-bookingsync-sass/javascripts'
    });

    if (!this._canImportNodeModules()) {
      let sweetalertTree = new Funnel(
        path.join(this.project.root, 'node_modules', 'sweetalert2', 'dist'), {
          files: ['sweetalert2.js', 'sweetalert2.css']
        }
      );

      vendorTrees.push(javascriptsTree, sweetalertTree);
    } else {
      vendorTrees.push(javascriptsTree);
    }

    return new BroccoliMergeTrees(vendorTrees);
  },

  // TODO: Remove once stable.
  isDevelopingAddon: function() {
    return true;
  },

  _canImportNodeModules() {
    return emberCliVersion.gte('2.15.0');
  },

  _importSweetAlert(target) {
    if (this._canImportNodeModules()) {
      target.import('node_modules/sweetalert2/dist/sweetalert2.js');
      target.import('node_modules/sweetalert2/dist/sweetalert2.css');
    } else {
      this.import('vendor/sweetalert2.js');
      this.import('vendor/sweetalert2.css');
    }
  }
};
