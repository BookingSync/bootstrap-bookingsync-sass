import Ember from "ember";

export default Ember.Controller.extend({
  currentName: 'John Doe',
  currentFirstName: 'John',
  currentLastName: 'Doe',
  currentEmail: 'john@example.com',
  currentAmount: 123,
  currentComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a fermentum ex, at malesuada sapien. In quis nisl diam. Ut mattis volutpat massa vel porta. Suspendisse aliquam accumsan justo. Morbi non augue risus. Integer congue, eros ac condimentum scelerisque, odio ante laoreet mauris, vitae faucibus ex nisi ut mauris. Nunc imperdiet ex felis, tempus viverra lorem lobortis quis. Curabitur molestie tempor orci et tincidunt. Suspendisse vestibulum aliquet diam, a lobortis lorem pretium eu. Etiam accumsan ex at odio iaculis, at malesuada augue faucibus. Mauris vitae risus sed magna dapibus dapibus ac quis eros. Sed cursus placerat porta.",

  // Used for select
  cities: ['Barcelona', 'Nevache', 'Sivota'],
  destination: 'Nevache',

  // Used by radio
  selectedRentalType: 'apartment',

  // Used for modal
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
      if (this.get('isShowingModal') === true) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    }
  }
});
