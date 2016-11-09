import Ember from 'ember';
const { computed } = Ember;
import layout from '../templates/components/bsy-alert';

export default Ember.Component.extend({
  layout,
  classNames: 'alert',
  classNameBindings: ['typeClassName', 'dismissibleClassName'],
  attributeBindings: ['role'],
  role: 'alert',
  dismissible: false,

  typeClassName: computed('type', function() {
    return 'alert-' + this.get('type');
  }),

  dismissibleClassName: computed('dismissible', function() {
    if (this.get('dismissible') === true) {
      return 'alert-dismissible';
    }
  }),

  actions: {
    dismiss: function() {
      this._renderNode.destroy();
    }
  }
});
