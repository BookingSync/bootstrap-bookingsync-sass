import Component from '@ember/component';
import layout from '../templates/components/bsy-select';

const BsySelectComponent = Component.extend({
  layout,
  tagName: 'div',
  classNames: 'select'
});

BsySelectComponent.reopenClass({
  positionalParams: ['selected']
});

export default BsySelectComponent;
