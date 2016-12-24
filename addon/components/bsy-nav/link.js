import Ember from 'ember';
const { computed } = Ember;
import layout from '../../templates/components/bsy-nav/link';

export default Ember.Component.extend({
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
