import Ember from 'ember';
import layout from '../templates/components/bsy-input';

const { Component, computed } = Ember;

const BsyInputComponent = Component.extend({
  layout,
  tagName: "div",
  classNames: "form-group",
  type: "text",
  classNameBindings: ["value:filled", "icon:has-icon"],
  inputClass: 'input',

  inputClassNames: computed('inputClass', function () {
    const inputClass = this.get('inputClass');
    if (inputClass) {
      return `form-control ${inputClass}`;
    }
    return "form-control";
  })
});

BsyInputComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyInputComponent;
