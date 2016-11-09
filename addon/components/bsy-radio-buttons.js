import Ember from 'ember';
import layout from '../templates/components/bsy-radio-buttons';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: 'btn-group',
  attributeBindings: ['role', 'aria-label'],
  role: 'group'
});
