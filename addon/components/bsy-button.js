import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bsy-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: 'btn',
  classNameBindings: ['typeClassName', 'loadingClassName'],
  isLoading: false,
  loadingLabel: 'Loading...',

  typeClassName: computed('type', function() {
    if (this.get('type') === 'submit') {
      return 'btn-primary';
    } else {
      return `btn-${  this.get('type')}`;
    }
  }),

  loadingClassName: computed('isLoading', function() {
    if (this.get('isLoading') === true) {
      return 'btn-loading';
    } else {
      return '';
    }
  }),

  click() {
    this.set('isLoading', true);
    this.$().prop('disabled', 'disabled');
    this.$().text(this.get('loadingLabel'));
  }
});
