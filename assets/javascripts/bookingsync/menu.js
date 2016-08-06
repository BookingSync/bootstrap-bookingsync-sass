/* ========================================================================
 * http://styleguide.bookingsync.com/javascript/#menu
 * ========================================================================
 * Copyright 2016 BookingSync SAS.
 * Licensed under MIT (https://github.com/BookingSync/styleguide/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var menuTimeout;
  $(document).on('mouseenter', '.menu-collapsed', function (event) {
    var element = $(this);
    if (!menuTimeout) {
      menuTimeout = window.setTimeout(function() {
        element.addClass('menu-hovered');
      }, 500);
    }
    $(element.data('target')).toggleClass(element.data('value'));
  });
  $(document).on('mouseleave', '.menu-collapsed', function (event) {
    var element = $(this);
    if (menuTimeout) {
      window.clearTimeout(menuTimeout);
      menuTimeout = null;
      element.removeClass('menu-hovered');
    }
  });
}(jQuery);
