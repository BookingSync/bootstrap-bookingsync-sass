import Ember from 'ember';

const { Component, computed } = Ember;

const BsyIconComponent = Component.extend({
  classNameBindings: ['iconClass', 'iconSize', 'iconType', 'fixedWidth:icon-fw'],

  name: '',
  size: '',
  type: '',
  fixedWidth: false,

  iconClass: computed('name', function() {
    let name = this.get('name');
    return name ? `icon-${name}` : '';
  }),

  iconSize: computed('size', function() {
    let size = this.get('size');
    return size ? `icon-${size}` : '';
  }),

  iconType: computed('type', function() {
    let type = this.get('type');
    return type ? `icon-${type}` : '';
  })
});

BsyIconComponent.reopenClass({
  positionalParams: ['name']
});

export default BsyIconComponent;
