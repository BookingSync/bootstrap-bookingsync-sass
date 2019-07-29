import Component from '@ember/component';
import layout from '../templates/components/bsy-select-multiple';

const BsySelectMultipleComponent = Component.extend({
  layout,
  tagName: 'div',
  classNames: 'select'
});

BsySelectMultipleComponent.reopenClass({
  positionalParams: ['selected']
});

export default BsySelectMultipleComponent;
