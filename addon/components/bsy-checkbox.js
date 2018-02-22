import Component from '@ember/component';
import layout from '../templates/components/bsy-checkbox';

const BsyCheckboxComponent = Component.extend({
  layout,
  tagName: "div",
  classNames: "checkbox",

  update() {}
});

BsyCheckboxComponent.reopenClass({
  positionalParams: ['checked']
});

export default BsyCheckboxComponent;
