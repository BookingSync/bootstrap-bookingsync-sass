import Ember from 'ember';
const { computed } = Ember;
import layout from '../../templates/components/bsy-annotated-section/annotation';

export default Ember.Component.extend({
  layout,
  tagName: "header",
  classNames: "annotated-section-annotation"
});
