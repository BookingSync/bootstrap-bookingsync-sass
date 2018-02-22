import Component from '@ember/component';
import layout from '../templates/components/bsy-textarea';

const BsyTextareaComponent = Component.extend({
  layout,
  tagName: "div",
  classNames: "form-group",
  classNameBindings: ["value:filled"],

  update() {}
});

BsyTextareaComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyTextareaComponent;
