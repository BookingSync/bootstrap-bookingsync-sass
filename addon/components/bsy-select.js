import Ember from 'ember';
import layout from '../templates/components/bsy-select';

const BsySelectComponent = Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "select"
});

BsySelectComponent.reopenClass({
  positionalParams: ['selected']
});

export default BsySelectComponent;
