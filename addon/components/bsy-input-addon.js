import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bsy-input-addon';

const { generateGuid } = Ember;

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: 'form-group',

  inputId: computed(function() {
    return generateGuid();
  })
});
