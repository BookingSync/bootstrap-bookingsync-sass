import Component from '@ember/component';
import layout from '../templates/components/bsy-radio-buttons';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: 'btn-group',
  attributeBindings: ['role', 'aria-label'],
  role: 'group'
});
