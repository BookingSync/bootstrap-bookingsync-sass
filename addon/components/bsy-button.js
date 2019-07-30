import Component from '@ember/component';
import { computed } from '@ember/object';
import { bool } from '@ember/object/computed';
import layout from '../templates/components/bsy-button';

export default Component.extend({
  layout,

  tagName: 'button',
  classNames: 'btn',
  classNameBindings: ['typeClassName', 'loadingClassName'],
  attributeBindings: ['disabled'],
  isLoading: false,
  loadingLabel: 'Loading...',

  disabled: bool('isLoading'),

  typeClassName: computed('type', function() {
    return this.type === 'submit' ? 'btn-primary' : `btn-${this.type}`;
  }),

  loadingClassName: computed('isLoading', function() {
    return this.isLoading ? 'btn-loading' : '';
  }),

  click() {
    this.set('isLoading', true);
  }
});
