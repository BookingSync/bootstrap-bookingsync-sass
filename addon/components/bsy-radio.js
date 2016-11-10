import Ember from 'ember';
import layout from '../templates/components/bsy-radio';

const BsyRadioComponent = Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "radio"
});

BsyRadioComponent.reopenClass({
  positionalParams: ['paramValue']
});

export default BsyRadioComponent;
