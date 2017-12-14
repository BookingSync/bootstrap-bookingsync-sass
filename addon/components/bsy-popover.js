import Ember from 'ember';
import layout from 'ember-tooltips/templates/components/ember-tooltip-base';
import EmberPopover from 'ember-tooltips/components/ember-popover';

export default EmberPopover.extend({
  layout,
  side: 'bottom',
});
