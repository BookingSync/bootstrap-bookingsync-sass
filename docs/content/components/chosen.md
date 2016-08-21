<div class="example">
  <div class="sheet-header">
    <h3 id="chosen-select">Chosen Select</h3>
  </div>

  <div class="bs-callout bs-callout-danger">
    <h4>External dependency</h4>
    <p>
      This component requires the
      <a href="http://harvesthq.github.io/chosen/">Chosen</a> library.
    </p>

    <p>Custom styles for select boxes provided by
    <a href="http://harvesthq.github.io/chosen/">Chosen</a>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="chosen-select">
    <div class="select">
      <div class="form-group">
        <label for="destination">Destination</label>
        <select class="form-control chosen">
          <option value=""></option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
        </select>
      </div>
    </div>

    <div class="select">
      <div class="form-group">
        <label for="destination">Destination</label>
        <select class="form-control chosen">
          <option value="One" selected>One (selected)</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
        </select>
      </div>
    </div>
  </div>
</div>
~~~ HTML
<div class="select">
  <div class="form-group">
    <label for="destination">Destination</label>
    <select class="form-control chosen">
      <option value=""></option>
      <option value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
      <option value="Four">Four</option>
    </select>
  </div>
</div>

<div class="select">
  <div class="form-group">
    <label for="destination">Destination</label>
    <select class="form-control chosen">
      <option value="One" selected>One (selected)</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
      <option value="Four">Four</option>
    </select>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="chosen-multiple-select">Chosen Multiple Select</h3>
  </div>

  <div class="bs-callout bs-callout-danger">
    <h4>External dependency</h4>
    <p>
      This component requires the
      <a href="http://harvesthq.github.io/chosen/">Chosen</a> library.
    </p>

    <p>Custom styles for select boxes provided by
    <a href="http://harvesthq.github.io/chosen/">Chosen</a>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="chosen-multiple-select">
    <div class="select">
      <div class="form-group">
        <label for="destination">Destination</label>
        <select class="form-control chosen" multiple>
          <option value=""></option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
        </select>
      </div>
    </div>

    <div class="select">
      <div class="form-group">
        <label for="destination">Destination</label>
        <select class="form-control chosen" multiple>
          <option value=""></option>
          <option value="One" selected>One (selected)</option>
          <option value="Two" selected>Two (selected)</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
        </select>
      </div>
    </div>
  </div>
</div>
~~~ HTML
<div class="select">
  <div class="form-group">
    <label for="destination">Destination</label>
    <select class="form-control chosen" multiple>
      <option value=""></option>
      <option value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
      <option value="Four">Four</option>
    </select>
  </div>
</div>

<div class="select">
  <div class="form-group">
    <label for="destination">Destination</label>
    <select class="form-control chosen" multiple>
      <option value=""></option>
      <option value="One" selected>One (selected)</option>
      <option value="Two" selected>Two (selected)</option>
      <option value="Three">Three</option>
      <option value="Four">Four</option>
    </select>
  </div>
</div>
~~~
