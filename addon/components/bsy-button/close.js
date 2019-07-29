import Component from '@ember/component';
import layout from '../../templates/components/bsy-button/close';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: 'btn btn-secondary-inverse btn-round',

  click() {
    this.$().prop('disabled', 'disabled');
  }
});
