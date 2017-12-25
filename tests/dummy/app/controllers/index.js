import Ember from "ember";

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  bsySwal: service(),

  currentName: 'John Doe',
  currentFirstName: 'John',
  currentLastName: 'Doe',
  currentEmail: 'john@example.com',
  currentAmount: 123,
  currentComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a fermentum ex, at malesuada sapien. In quis nisl diam. Ut mattis volutpat massa vel porta. Suspendisse aliquam accumsan justo. Morbi non augue risus. Integer congue, eros ac condimentum scelerisque, odio ante laoreet mauris, vitae faucibus ex nisi ut mauris. Nunc imperdiet ex felis, tempus viverra lorem lobortis quis. Curabitur molestie tempor orci et tincidunt. Suspendisse vestibulum aliquet diam, a lobortis lorem pretium eu. Etiam accumsan ex at odio iaculis, at malesuada augue faucibus. Mauris vitae risus sed magna dapibus dapibus ac quis eros. Sed cursus placerat porta.",

  // Used for select
  cities: ['Barcelona', 'Nevache', 'Sivota'],
  currentDestination: 'Nevache',
  currentDestinations: ['Nevache', 'Sivota'],

  // Used by radio
  selectedRentalType: 'apartment',

  // Used for modal
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },

    sampleAction: function() {
      this.get('bsySwal').confirm(
        'BookingSync Alert!',
        'add message here',
        'success'
      );
    }
  }
});
