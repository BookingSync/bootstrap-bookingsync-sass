/* ========================================================================
 * http://styleguide.bookingsync.com/javascript/#menu
 * ========================================================================
 * Copyright 2016 BookingSync SAS.
 * Licensed under MIT (https://github.com/BookingSync/styleguide/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  $(document).on('click', '[data-toggle="menu-expand"]', function (event) {
    var element = $(this);
    var menu = $(element.data('menu'))
    var submenu = $(element.data('submenu'));

    if (submenu.hasClass('menu-submenu-collapsed')) {
      menu.find('.active').removeClass('active');
      element.parents('li').addClass('active');
      menu.addClass('menu-collapsed');
      menu.removeClass('menu-hovered');
      submenu.removeClass('menu-submenu-collapsed');
    } else {
      menu.removeClass('menu-collapsed');
      menu.removeClass('menu-hovered');
      submenu.addClass('menu-submenu-collapsed');
    }
  });


  var menuTimeout;
  $(document).on('mouseenter', '.menu-folded, .menu-collapsed', function (event) {
    var element = $(this);
    if (!menuTimeout) {
      menuTimeout = window.setTimeout(function() {
        element.addClass('menu-hovered');
      }, 500);
    }
    $(element.data('target')).toggleClass(element.data('value'));
  });
  $(document).on('mouseleave', '.menu-folded, .menu-collapsed', function (event) {
    var element = $(this);
    if (menuTimeout) {
      window.clearTimeout(menuTimeout);
      menuTimeout = null;
      element.removeClass('menu-hovered');
    }
  });

  $(document).on('click', '.menu-toggle-parent-frame', function(event) {
    parent.postMessage("bookingsync:menu:toggle", "*");
  });

  $(window).ready(function() {
    var iframes = $('iframe.iframe-fullscreen');
    var toggleButton = $('.menu-toggle-parent-frame');

    // in parent iframe
    if (iframes.length > 0) {
      // Notify ability to hide parent menu-toggle button
      iframes.each(function(index) {
        var iframe = this;
        $(iframe).ready(function() {
          window.setTimeout(function() {
            iframe.contentWindow.postMessage("bookingsync:menu:toggle-button:hideable", "*");
          }, 1000);
        });
      });

      window.addEventListener("message", function(event) {
        if (event.data === "bookingsync:menu:toggle-button:hide") {
          $('.menu-toggle-hideable').hide();
        }

        if (event.data === "bookingsync:menu:toggle") {
          $('body').toggleClass("menu-open");
        }
      }, false);
    }

    // in app iframe
    if (toggleButton.length > 0) {
      window.addEventListener("message", function(event) {
        if (event.data === "bookingsync:menu:toggle-button:hideable") {
          parent.postMessage("bookingsync:menu:toggle-button:hide", "*");
        }
      });
    }
  });
}(jQuery);
