import Component from '@ember/component';
import layout from '../../templates/components/bsy-input-addon/input';

const BsyInputAddonInputComponent = Component.extend({
  layout,
  tagName: "div",
  classNameBindings: ["value:filled", "placeholder:filled"],
  type: "text"
});

BsyInputAddonInputComponent.reopenClass({
  positionalParams: ['value', 'placeholder']
});

export default BsyInputAddonInputComponent;
