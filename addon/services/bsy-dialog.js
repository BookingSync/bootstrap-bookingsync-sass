import Service from '@ember/service';
import swal from 'sweetalert';

export default Service.extend({
  init() {
    this._super(...arguments);

    swal.setDefaults({
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-secondary',
      reverseButtons: true,
      focusConfirm: false,
      focusCancel: false,
      customClass: 'bsy-dialog',
      showCancelButton: true
    });
  },

  alert: swal
});
