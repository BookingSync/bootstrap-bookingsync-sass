<div class="example">
  <div class="sheet-header">
    <h3 id="dropdown">Dropdown</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="dropdown">
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button"
              id="dropdownMenu1" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true">
        Dropdown
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li class="dropdown-header">Dropdown header</li>
        <li><a href="#">Action</a></li>
        <li class="disabled"><a href="#">Disabled link</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"> </li>
        <li class="dropdown-header">Dropdown header</li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
</div>
~~~ html
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button"
          id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="#">Action</a></li>
    <li class="disabled"><a href="#">Disabled link</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"> </li>
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
~~~
