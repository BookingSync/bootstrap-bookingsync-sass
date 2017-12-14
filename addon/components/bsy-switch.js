import Ember from 'ember';
import layout from '../templates/components/bsy-switch';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: '',
  theme: 'light',
  size: 'small',
  showLabels: false,
  onLabel: 'On',
  offLabel: 'Off',
  value: false,
  disabled: false,
});
