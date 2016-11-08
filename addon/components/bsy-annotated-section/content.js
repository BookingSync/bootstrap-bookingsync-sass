import Ember from 'ember';
const { computed } = Ember;
import layout from '../../templates/components/bsy-annotated-section/content';

export default Ember.Component.extend({
  layout,
  tagName: "div",
  classNames: "annotated-section-content"
});
