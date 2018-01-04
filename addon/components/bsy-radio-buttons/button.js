import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/bsy-radio-buttons/button';

const BsyRadioButtonsButtonComponent = Component.extend({
  layout,
  tagName: 'label',
  classNames: 'btn btn-secondary',
  classNameBindings: ['activeClassName'],

  activeClassName: computed('paramValue', function () {
    if (this.get('paramValue') === this.get('option')) {
      return 'active';
    }
  })
});

BsyRadioButtonsButtonComponent.reopenClass({
  positionalParams: ['paramValue']
});

export default BsyRadioButtonsButtonComponent;
