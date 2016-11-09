import Ember from 'ember';
import layout from '../../templates/components/bsy-input-addon/input';

const BsyInputAddonInputComponent = Ember.Component.extend({
  layout,
  tagName: "div",
  type: "text"
});

BsyInputAddonInputComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyInputAddonInputComponent;
