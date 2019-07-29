import Component from '@ember/component';
import layout from '../templates/components/bsy-modal';

export default Component.extend({
  layout,
  tagName: 'div',

  didRender() {
    this._super(...arguments);
    document.body.classList.add('modal-open');
  },

  willDestroyElement() {
    this._super(...arguments);
    document.body.classList.remove('modal-open');
  }
});
