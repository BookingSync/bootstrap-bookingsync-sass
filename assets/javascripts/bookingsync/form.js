/* ========================================================================
 * http://styleguide.bookingsync.com/javascript/#forms
 * ========================================================================
 * Copyright 2015 BookingSync SAS.
 * Licensed under MIT (https://github.com/BookingSync/styleguide/blob/master/LICENSE)
 * ======================================================================== */

var setInputFilledValue = function(elt) {
  $(elt).parents('.form-group').toggleClass('filled', !!$(elt).val());
};

+function ($, document) {
  'use strict';

  $(document).on('DOMContentLoaded', function() {
    $('.form-group .form-control').each(function (index, e) {
      setInputFilledValue(e)
    });
    $('.checkbox input[type="checkbox"][disabled]').each(function (index, e) {
      $(e).parents('.checkbox').addClass('disabled');
    });
    $('.radio input[type="radio"][disabled]').each(function (index, e) {
      $(e).parents('.radio').addClass('disabled');
    });
    $('.form-group .form-control[disabled]').each(function (index, e) {
      $(e).parents('.form-group').addClass('disabled');
    });
    $('.form-group .form-control[readonly]').each(function (index, e) {
      $(e).parents('.form-group').addClass('readonly');
    });
    $(document).on('focus', '.form-group .form-control', function (e) {
      $(e.target).parents('.form-group').addClass('focused');
    });
    $(document).on('chosen:showing_dropdown', 'select.form-control.chosen', function (e) {
      $(e.target).parents('.form-group').addClass('focused');
    });
    $(document).on('chosen:hiding_dropdown', 'select.form-control.chosen', function (e) {
      if (!$(e.target).val()) {
        $(e.target).parents('.form-group').removeClass('focused');
      }
    });
    $(document).on('blur', '.form-group .form-control', function (e) {
      $(e.target).parents('.form-group').removeClass('focused');
      setInputFilledValue(e.target)
    });
    $(document).on('change', '.select .form-group .form-control', function (e) {
      setInputFilledValue(e.target)
    });
  });
}(jQuery, document);
