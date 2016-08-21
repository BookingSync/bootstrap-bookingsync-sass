//= require 'bootstrap-sprockets'
//= require 'bootstrap-bookingsync-sprockets'

//= require 'chosen'

$ ->
  $(".chosen").chosen()

  responsiveButtons = '<div class="example-responsive-nav">
    <div class="btn-group" role="group" aria-label="screensize">
      <button type="button" class="btn btn-secondary"
              data-value="bs-example-iframe-container-mobile">Mobile</button>
      <button type="button" class="btn btn-secondary"
              data-value="bs-example-iframe-container-tablet">Tablet</button>
      <button type="button" class="btn btn-secondary"
              data-value="bs-example-iframe-container-desktop">Desktop</button>
    </div>
  </div>'

  for example in $(".example-responsive")
    $(example).find(".sheet-header").append(responsiveButtons)

  $(document).on 'click', '.example-responsive-nav button', (event) ->
    button = $(this)
    example = button.parents('.example').find('.bs-example')
    example.removeClass('bs-example-iframe-container-mobile bs-example-iframe-container-tablet
      bs-example-iframe-container-desktop')
    example.addClass(button.data('value'))
