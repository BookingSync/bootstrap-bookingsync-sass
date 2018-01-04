import Component from '@ember/component';
import layout from '../templates/components/bsy-switch';

export default Component.extend({
  layout,
  tagName: '',
  theme: 'light',
  size: 'medium',
  showLabels: false,
  onLabel: 'On',
  offLabel: 'Off',
  value: false,
  disabled: false,
});
