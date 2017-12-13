import Ember from 'ember';
import layout from '../templates/components/bsy-popover';

export default Ember.Component.extend({
  layout,
  tagName: '',
  event: 'hover',
  targetId: '',
  class: '',
  delay: 0,
  delayOnChange: true,
  duration: 0,
  effect: 'slide',
  side: 'bottom',
  spacing: 10,
  hideDelay: 250,
});
