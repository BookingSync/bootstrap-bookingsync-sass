# Helper classes

<div class="example">
  <div class="sheet-header">
    <h3 id="helper-example-vertical-alignment">Vertical alignment</h3>
  </div>

  <p>Vertical align inline elements having different line height.</p>

  <div class="bs-callout bs-callout-warning">
    <h4>Vertical alignment inside block elements</h4>
    <p>This helper classes will not vertically align content inside block elements.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="helper-example-vertical-alignment">
    <h1>
      <small class="valign-top">Top</small> aligned text.
    </h1>
    <h1>
      <small class="valign-middle">Middle</small> aligned text.
    </h1>
    <h1>
      <small class="valign-bottom">Bottom</small> aligned text.
    </h1>
  </div>
</div>
~~~ html
<h1><small class="valign-top">Top</small> aligned text.</h1>
<h1><small class="valign-middle">Middle</small> aligned text.</h1>
<h1><small class="valign-bottom">Bottom</small> aligned text.</h1>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="forms-example-vertical-table-alignment">Vertical table alignment</h3>
  </div>

  <p>Vertical align elements inside table cells.</p>

  <div class="bs-example bs-sheet" data-example-id="forms-example-vertical-table-alignment">
    <table class="table">
      <tr>
        <th>Example<br/>row</th>
        <td class="valign-top">Top</td>
        <td class="valign-middle">Middle</td>
        <td class="valign-bottom">Bottom</td>
      </tr>
    </table>
  </div>
</div>
~~~ html
<table>
  <tr>
    <td class="valign-top">Top</td>
    <td class="valign-middle">Middle</td>
    <td class="valign-bottom">Bottom</td>
  </tr>
</table>
~~~
