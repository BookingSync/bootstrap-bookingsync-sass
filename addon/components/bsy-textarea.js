import Ember from 'ember';
import layout from '../templates/components/bsy-textarea';

const BsyTextareaComponent = Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "form-group",
  classNameBindings: ["value:filled"]
});

BsyTextareaComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyTextareaComponent;
