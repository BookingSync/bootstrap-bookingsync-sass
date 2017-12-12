import Ember from 'ember';
import layout from '../templates/components/bsy-switch';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: 'make-switch has-switch switch-small',
  classNameBindings: ['isChecked:switch-on:switch-off'],

  isChecked: false
});
