'use strict';

let path = require('path');
let Funnel = require('broccoli-funnel');
let BroccoliMergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  included(app, parentAddon) {
    let target = (parentAddon || app);
    this._super.included.apply(this, target);

    this.assetsPath = path.join(this.root, 'assets');
  },

  contentFor(type) {
    if (type === 'head') {
      return '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,300">';
    }

    return null;
  },

  treeForStyles() {
    let stylesheetsPath = path.join(this.assetsPath, 'stylesheets');
    let assetsTree = new Funnel(this.treeGenerator(stylesheetsPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return assetsTree;
  }
};
