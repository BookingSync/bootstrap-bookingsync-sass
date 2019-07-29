import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bsy-alert';

export default Component.extend({
  layout,
  classNames: 'alert',
  classNameBindings: ['typeClassName', 'dismissibleClassName'],
  attributeBindings: ['role'],
  role: 'alert',
  dismissible: false,

  typeClassName: computed('type', function() {
    return `alert-${this.type}`;
  }),

  dismissibleClassName: computed('dismissible', function() {
    return this.dismissible ? 'alert-dismissible' : '';
  }),

  actions: {
    dismiss() {
      this._renderNode.destroy();
    }
  }
});
