import Component from '@ember/component';
import layout from '../templates/components/bsy-radio';

const BsyRadioComponent = Component.extend({
  layout,
  tagName: "div",
  classNames: "radio"
});

BsyRadioComponent.reopenClass({
  positionalParams: ['paramValue']
});

export default BsyRadioComponent;
