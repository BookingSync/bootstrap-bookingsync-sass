import Component from '@ember/component';
import layout from '../../templates/components/bsy-input-addon/input';

const BsyInputAddonInputComponent = Component.extend({
  layout,
  tagName: "div",
  type: "text"
});

BsyInputAddonInputComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyInputAddonInputComponent;
