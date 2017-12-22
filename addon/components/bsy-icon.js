import Ember from 'ember';

const { Component, computed } = Ember;

const BsyIconComponent = Component.extend({
  classNameBindings: ['iconClass', 'iconSize', 'iconType', 'fixedWidth:icon-fw'],

  name: null,
  size: null,
  type: null,
  fixedWidth: false,

  iconClass: computed('name', function() {
    return `icon-${this.get('name')}`;
  }),

  iconSize: computed('size', function() {
    let size = this.get('size');

    if (size) {
      return `icon-${this.get('size')}`;
    }
  }),

  iconType: computed('type', function() {
    let size = this.get('type');

    if (size) {
      return `icon-${this.get('type')}`;
    }
  })
});

BsyIconComponent.reopenClass({
  positionalParams: ['name']
});

export default BsyIconComponent;
