import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEqual } from '@ember/utils';
import layout from '../../templates/components/bsy-radio-buttons/button';

const BsyRadioButtonsButtonComponent = Component.extend({
  layout,
  tagName: 'label',
  classNames: 'btn btn-secondary',
  classNameBindings: ['activeClassName:active'],

  activeClassName: computed('value', function() {
    return isEqual(this.get('value'), this.get('option'));
  }).readOnly(),
});

BsyRadioButtonsButtonComponent.reopenClass({
  positionalParams: ['value']
});

export default BsyRadioButtonsButtonComponent;
