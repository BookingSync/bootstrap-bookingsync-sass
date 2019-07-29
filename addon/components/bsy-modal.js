import $ from 'jquery';
import Component from '@ember/component';
import layout from '../templates/components/bsy-modal';

export default Component.extend({
  layout,
  tagName: 'div',

  didRender() {
    this._super(...arguments);
    $('body').addClass('modal-open');
  },

  willDestroyElement() {
    this._super(...arguments);
    $('body').removeClass('modal-open');
  }
});
