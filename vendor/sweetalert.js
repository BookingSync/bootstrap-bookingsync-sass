(function() {
  function vendorModule() {
    'use strict';

    return { 'default': swal };
  }

  define('sweetalert', [], vendorModule);
})();
