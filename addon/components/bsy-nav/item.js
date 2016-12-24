import Ember from 'ember';
const { computed } = Ember;
import layout from '../../templates/components/bsy-nav/item';

export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNames: 'nav-item',
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
