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
    if (this.type === 'submit') {
      return 'btn-primary';
    } else {
      return `btn-${this.type}`;
    }
  }),

  loadingClassName: computed('isLoading', function() {
    if (this.isLoading) {
      return 'btn-loading';
    } else {
      return '';
    }
  }),

  click() {
    this.set('isLoading', true);
    this.element.disabled = true;
    this.element.textContent = this.loadingLabel;
  }
});
