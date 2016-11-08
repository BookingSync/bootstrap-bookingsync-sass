import Ember from 'ember';
const { computed } = Ember;
import layout from '../templates/components/bsy-annotated-section';

export default Ember.Component.extend({
  layout,
  tagName: "section",
  classNames: "annotated-section"
});
