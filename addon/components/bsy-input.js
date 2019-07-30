import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bsy-input';

const { generateGuid } = Ember;

const BsyInputComponent = Component.extend({
  layout,
  tagName: 'div',
  classNames: 'form-group',
  type: 'text',
  readonly: false,
  placeholder: '',
  disabled: false,
  classNameBindings: ['value:filled', 'icon:has-icon', 'formGroupSize'],
  size: null, // sm, lg

  inputClassNames: computed('size', function() {
    return this.size ? `form-control input-${this.size}` : 'form-control';
  }),

  iconSize: computed('size', function() {
    return this.size ? `icon--${this.size}` : '';
  }),

  formGroupSize: computed('size', function() {
    return this.size ? `form-group--${this.size}` : '';
  }),

  inputId: computed(function() {
    return generateGuid();
  }),

  update() {}
});

BsyInputComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyInputComponent;
