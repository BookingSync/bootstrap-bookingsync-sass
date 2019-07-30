import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/bsy-radio-buttons/button';

const BsyRadioButtonsButtonComponent = Component.extend({
  layout,
  tagName: 'label',
  classNames: 'btn btn-secondary',
  classNameBindings: ['active'],

  active: computed('value', 'option', function() {
    return this.value === this.option;
  }).readOnly()
});

BsyRadioButtonsButtonComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyRadioButtonsButtonComponent;
