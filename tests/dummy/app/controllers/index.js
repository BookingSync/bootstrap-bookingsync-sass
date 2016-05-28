import Ember from "ember";

export default Ember.Controller.extend({
  // Used for select example
  cities: ['Barcelona', 'Nevache', 'Sivota'],
  destination: 'Nevache',

  // User for modal
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
