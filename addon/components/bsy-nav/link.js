import Component from '@ember/component';
import layout from '../../templates/components/bsy-nav/link';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: 'nav-link',
  classNameBindings: ['active'],
  active: false
});
