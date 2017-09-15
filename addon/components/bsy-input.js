import Ember from 'ember';
import layout from '../templates/components/bsy-input';

const { Component, computed } = Ember;

const BsyInputComponent = Component.extend({
  layout,
  tagName: "div",
  classNames: "form-group",
  type: "text",
  classNameBindings: ["value:filled", "icon:has-icon"],
  size: null, // sm, lg

  inputClassNames: computed('size', function () {
    const size = this.get('size');
    if (size) {
      return `form-control input-${size}`;
    }
    return "form-control";
  }),

  iconSize: computed('size', function () {
    const size = this.get('size');
    if (size) {
      return `icon--${size}`;
    }
  })
});

BsyInputComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyInputComponent;
