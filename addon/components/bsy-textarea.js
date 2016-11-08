import Ember from 'ember';
const { computed } = Ember;
import layout from '../templates/components/bsy-textarea';

export default Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "form-group"
});
