import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Controller.extend({
  bsyAlert: service(),

  currentName: 'John Doe',
  currentFirstName: 'John',
  currentLastName: 'Doe',
  currentEmail: 'john@example.com',
  currentAmount: 123,
  currentComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a fermentum ex, at malesuada sapien. In quis nisl diam. Ut mattis volutpat massa vel porta. Suspendisse aliquam accumsan justo. Morbi non augue risus. Integer congue, eros ac condimentum scelerisque, odio ante laoreet mauris, vitae faucibus ex nisi ut mauris. Nunc imperdiet ex felis, tempus viverra lorem lobortis quis. Curabitur molestie tempor orci et tincidunt. Suspendisse vestibulum aliquet diam, a lobortis lorem pretium eu. Etiam accumsan ex at odio iaculis, at malesuada augue faucibus. Mauris vitae risus sed magna dapibus dapibus ac quis eros. Sed cursus placerat porta.",

  // Used by radio
  selectedRentalType: 'apartment',

  // Used for select
  currentDestination: 'Nevache',

  // Used for modal
  isShowingModal: false,

  cities: A(['Barcelona', 'Nevache', 'Sivota']),
  currentDestinations: A(['Nevache', 'Sivota']),


  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },

    sampleAction: function() {
      alert("Sample action");
    },

    openPopup() {
      this.get('bsyAlert').alert({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      });
    }
  }
});
