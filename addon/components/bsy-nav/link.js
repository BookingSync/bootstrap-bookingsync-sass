import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/bsy-nav/link';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: 'nav-link',
  classNameBindings: ["activeClassName"],
  active: false,

  activeClassName: computed('active', function() {
    if (this.get('active') === true) {
      return "active";
    } else {
      return "";
    }
  })
});
