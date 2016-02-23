# Helper classes

## Vertical alignment

Vertical align inline elements having different line height.

<div class="example">
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
~~~ html
<h1><small class="valign-top">Top</small> aligned text.</h1>
<h1><small class="valign-middle">Middle</small> aligned text.</h1>
<h1><small class="valign-bottom">Bottom</small> aligned text.</h1>
~~~

Vertical align elements inside table cells.

<div class="example">
  <table class="table">
    <tr>
      <th>Example<br/>row</th>
      <td class="valign-top">Top</td>
      <td class="valign-middle">Middle</td>
      <td class="valign-bottom">Bottom</td>
    </tr>
  </table>
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

<div class="bs-callout bs-callout-warning">
  <h4>Vertical alignment inside block elements</h4>
  <p>This helper classes will not vertically align content inside block elements.</p>
</div>
