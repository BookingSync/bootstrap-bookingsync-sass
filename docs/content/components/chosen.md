# Chosen

<div class="bs-callout bs-callout-danger">
  <h4>External dependency</h4>
  <p>
    This component requires the
    <a href="http://harvesthq.github.io/chosen/">Chosen</a> library.
  </p>

  <p>Custom styles for select boxes provided by
  <a href="http://harvesthq.github.io/chosen/">Chosen</a>.</p>
</div>

<div class="example">
  <div class="sheet-header">
    <h3 id="chosen-example">Standard Select</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="chosen-example">
    <select class="form-control chosen">
      <option value=""></option>
      <option value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
      <option value="Four">Four</option>
    </select>
  </div>
</div>
~~~ HTML
<select class="form-control chosen">
  <option value=""></option>
  <option value="One">One</option>
  <option value="Two">Two</option>
  <option value="Three">Three</option>
  <option value="Four">Four</option>
</select>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="chosen-example-multiselect">Multiple Select</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="chosen-example-multiselect">
    <select class="form-control chosen" multiple tabindex="3">
      <option value=""></option>
      <option value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
      <option value="Four">Four</option>
    </select>
  </div>
</div>
~~~ HTML
<select class="form-control chosen" multiple tabindex="3">
  <option value=""></option>
  <option value="One">One</option>
  <option value="Two">Two</option>
  <option value="Three">Three</option>
  <option value="Four">Four</option>
</select>
~~~
