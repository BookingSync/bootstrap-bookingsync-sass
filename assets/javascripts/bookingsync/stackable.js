/* ========================================================================
 * http://styleguide.bookingsync.com/javascript/#stackable
 * ========================================================================
 * Copyright 2016 BookingSync SAS.
 * Licensed under MIT (https://github.com/BookingSync/styleguide/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var refreshStackable = function() {
    $('ul[data-toggle="stackable"]').each(function (index, element) {
      var $element = $(element);
      var targetSelector = $element.data('target');
      var $target = $element.find(targetSelector);
      var totalWidth = $element.width();
      var $targetList = $target.children('ul');
      var targetListWidth, maxItemsWidth;
      var currentWidth = 0;
      var stackNextItems = false;

      // Get width of stacked tab
      $target.removeClass('hide');
      targetListWidth = $target.width();
      maxItemsWidth = totalWidth - targetListWidth;
      $target.addClass('hide');

      // Bring back all items to the main list
      $targetList.find('li').each(function(index, item) {
        $element.append($(item).detach());
      });

      // Move items not fitting in the single line to the stacked list
      $element.children('li:not(' + targetSelector + ')').each(function(index, item) {
        var $item = $(item);
        var itemWidth = $item.width();

        if (stackNextItems !== true && currentWidth + itemWidth < maxItemsWidth) {
          currentWidth += itemWidth;
        } else {
          stackNextItems = true;
          $target.removeClass('hide');
          $targetList.append($item.detach());
        }
      });
    });
  };

  $(document).ready(refreshStackable);
  $(window).resize(refreshStackable);
}(jQuery);
