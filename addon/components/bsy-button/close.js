import Ember from 'ember';
import layout from '../../templates/components/bsy-button/close';

export default Ember.Component.extend({
  layout,
  tagName: "button",
  classNames: "btn btn-secondary-inverse btn-round",

  click: function() {
    this.$().prop('disabled', 'disabled');
  }
});
