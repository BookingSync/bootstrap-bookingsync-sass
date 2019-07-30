import Component from '@ember/component';
import layout from '../../templates/components/bsy-nav/item';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: 'nav-item',
  classNameBindings: ['active'],
  active: false
});
