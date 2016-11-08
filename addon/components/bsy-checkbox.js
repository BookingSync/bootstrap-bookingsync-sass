import Ember from 'ember';
const { computed } = Ember;
import layout from '../templates/components/bsy-checkbox';

export default Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "checkbox"
});
