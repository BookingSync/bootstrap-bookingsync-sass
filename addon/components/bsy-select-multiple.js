import Ember from 'ember';
import layout from '../templates/components/bsy-select-multiple';

const BsySelectMultipleComponent = Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "select"
});

BsySelectMultipleComponent.reopenClass({
  positionalParams: ['selected']
});

export default BsySelectMultipleComponent;
