<div class="example">
  <div class="sheet-header">
    <h3 id="alerts">Alerts</h3>
  </div>
  <p>Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classes (e.g., <code>.alert-success</code>) for basic alert messages.</p>
  <div class="bs-example bs-sheet" data-example-id="alerts">
    <div class="alert alert-success" role="alert">
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
    <div class="alert alert-info" role="alert">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
    <div class="alert alert-danger" role="alert">
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
  </div>
</div>
~~~ html
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="dismissible-alerts">Dismissible alerts</h3>
  </div>
  <p>Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.</p>

  <div class="bs-callout bs-callout-warning">
    <h4>Ensure proper behavior across all devices</h4>
    <p>
      Be sure to use the <code>&lt;button&gt;</code> element with the <code>data-dismiss="alert"</code> data attribute.
    </p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="dismissible-alerts">
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
  </div>
</div>
~~~ html
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="links-in-alerts">Links in alerts</h3>
  </div>
  <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.
</p>

  <div class="bs-callout bs-callout-warning">
    <h4>Ensure proper behavior across all devices</h4>
    <p>
      Be sure to use the <code>&lt;button&gt;</code> element with the <code>data-dismiss="alert"</code> data attribute.
    </p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="dismissible-alerts">
    <div class="alert alert-success" role="alert">
      <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message.</a>
    </div>
    <div class="alert alert-info" role="alert">
      <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
    </div>
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
    </div>
    <div class="alert alert-danger" role="alert">
      <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
    </div>
  </div>
</div>
~~~ html
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message.</a>
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>
~~~
