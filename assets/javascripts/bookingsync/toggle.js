/* ========================================================================
 * http://styleguide.bookingsync.com/javascript/#toggle
 * ========================================================================
 * Copyright 2016 BookingSync SAS.
 * Licensed under MIT (https://github.com/BookingSync/styleguide/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  $(document).on('click', '[data-toggle="toggle"]', function (event) {
    event.preventDefault();
    var element = $(this);
    $(element.data('target')).toggleClass(element.data('value'));
  });
}(jQuery);
