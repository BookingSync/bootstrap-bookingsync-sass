import Ember from 'ember';
import layout from '../templates/components/bsy-input';

const BsyInputComponent = Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "form-group",
  type: "text"
});

BsyInputComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyInputComponent;
