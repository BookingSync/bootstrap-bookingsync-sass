# Switch

Turns checkboxes and radio buttons in toggle switches

<div class="bs-callout bs-callout-danger">
  <h4>Plugin dependency</h4>
  <p>
    This component requires customized bootstrapSwitch JS plugin provided by the
    bootstrap-bookingsync-sass gem.
  </p>
</div>

<div class="bs-callout bs-callout-danger">
  <h4>Sizes</h4>
  <p>
    BootstrapSwitch plugin provides various size variants. The only variant
    currently supported by bootstrap-bookingsync-sass is the
    <code>switch-small</code>.
  </p>
</div>

<div class="example">
  <div class="sheet-header">
    <h3 id="switch-example">Basic example</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="switch-example">
    <div class="make-switch switch-small">
      <input type="checkbox" checked>
    </div>
  </div>
</div>
~~~ HTML
<div class="make-switch switch-small">
  <input type="checkbox" checked>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="switch-example-disabled">Disabled state</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="switch-example-disabled">
    <div class="make-switch switch-small">
      <input type="checkbox" checked disabled>
    </div>
  </div>
</div>
~~~ HTML
<div class="make-switch switch-small">
  <input type="checkbox" checked disabled>
</div>
~~~
