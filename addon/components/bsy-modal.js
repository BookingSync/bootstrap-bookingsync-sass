import Ember from 'ember';
import layout from '../templates/components/bsy-modal';

export default Ember.Component.extend({
  layout,
  tagName: "div",

  didRender() {
    this._super(...arguments);
    Ember.$('body').addClass('modal-open');
  },

  willDestroyElement() {
    this._super(...arguments);
    Ember.$('body').removeClass('modal-open');
  }
});
