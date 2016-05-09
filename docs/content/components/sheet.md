# Sheet

<div class="example">
  <div class="sheet-header">
    <h3 id="sheet-example">Basic example</h3>
  </div>
  <p>Highly inspired from the <code>panel</code> component, the sheet will auto scale and have a relative position to ease children positioning.</p>
  <div class="bs-example bs-sheet" data-example-id="sheet-example">
    <div class="sheet">
      <p>Text...</p>
    </div>
  </div>
</div>
~~~ html
<div class="sheet">
  <p>Text...</p>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="sheet-example-with-header">Example with header</h3>
  </div>
  <div class="bs-example bs-sheet-with-header"
       data-example-id="sheet-example-with-header">
    <div class="sheet">
      <div class="sheet-header">
        <h2>Header</h2>
      </div>
      <p>Text...</p>
    </div>
  </div>
</div>
~~~ html
<div class="sheet">
  <div class="sheet-header">
    <h2>Header</h2>
  </div>
  <p>Text...</p>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="sheet-example-with-tabs">Example with tabs</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="sheet-example-with-tabs">
    <div class="sheet">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#">Tab 1</a></li>
        <li><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3</a></li>
      </ul>
      <div>
        <p>Text...</p>
      </div>
    </div>
  </div>
</div>
~~~ html
<div class="sheet">
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Tab 1</a></li>
    <li><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
  </ul>
  <div>
    <p>Text...</p>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="sheet-example-with-stacked-tabs">Example with stacked tabs</h3>
  </div>
  <div class="bs-example bs-sheet"
       data-example-id="sheet-example-with-stacked-tabs">
    <div class="sheet">
      <ul class="nav nav-tabs">
        <li><a href="#">Tab 1</a></li>
        <li class="active"><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3</a></li>
        <li class="dropdown pull-right">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            More <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#">Tab 4</a></li>
            <li><a href="#">Tab 5</a></li>
          </ul>
        </li>
      </ul>
      <div>
        <p>Text...</p>
      </div>
    </div>
  </div>
</div>
~~~ html
<div class="sheet">
  <ul class="nav nav-tabs">
    <li><a href="#">Tab 1</a></li>
    <li class="active"><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
    <li class="dropdown pull-right">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        More <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#">Tab 4</a></li>
        <li><a href="#">Tab 5</a></li>
      </ul>
    </li>
  </ul>
  <div>
    <p>Text...</p>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="sheet-example-with-auto-stackable-tabs">
      Example with auto-stackable tabs
    </h3>
  </div>

  <div class="bs-callout bs-callout-danger">
    <h4>Plugin dependency</h4>
    <p>
      This component requires customized bootstrapStackable JS plugin provided by the bootstrap-bookingsync-sass gem.
    </p>
  </div>

  <div class="bs-example bs-sheet"
       data-example-id="sheet-example-with-auto-stackable-tabs">
    <div class="sheet">
      <ul class="nav nav-tabs" data-toggle="stackable"
          data-target=".stackable-dropdown">
        <li><a href="#">Tab 1</a></li>
        <li class="active"><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3</a></li>
        <li><a href="#">Tab 4</a></li>
        <li><a href="#">Tab 5</a></li>
        <li><a href="#">Tab 6</a></li>
        <li><a href="#">Tab 7</a></li>
        <li><a href="#">Tab 8</a></li>
        <li><a href="#">Tab 9</a></li>
        <li><a href="#">Tab 10</a></li>
        <li><a href="#">Tab 11</a></li>
        <li><a href="#">Tab 12</a></li>
        <li><a href="#">Tab Last</a></li>
        <li class="dropdown pull-right stackable-dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            More <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
          </ul>
        </li>
      </ul>
      <div>
        <p>Text...</p>
      </div>
    </div>

    <div class="sheet">
      <ul class="nav nav-tabs" data-toggle="stackable"
          data-target=".stackable-dropdown">
        <li><a href="#">Tab 1</a></li>
        <li class="active"><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3</a></li>
        <li><a href="#">Tab 4</a></li>
        <li><a href="#">Tab 5</a></li>
        <li><a href="#">Tab 6</a></li>
        <li><a href="#">Tab 7 (with long name)</a></li>
        <li><a href="#">Tab 8 (last)</a></li>
        <li class="dropdown pull-right stackable-dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            More <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
          </ul>
        </li>
      </ul>
      <div>
        <p>Text...</p>
      </div>
    </div>

    <div class="sheet">
      <ul class="nav nav-tabs" data-toggle="stackable"
          data-target=".stackable-dropdown">
        <li><a href="#">Tab 1</a></li>
        <li class="active"><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3 (last)</a></li>
        <li class="dropdown pull-right stackable-dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            More <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
          </ul>
        </li>
      </ul>
      <div>
        <p>Text...</p>
      </div>
    </div>
  </div>
</div>
~~~ html
<div class="sheet">
  <ul class="nav nav-tabs" data-toggle="stackable"
      data-target=".stackable-dropdown">
    <li><a href="#">Tab 1</a></li>
    <li class="active"><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
    <li><a href="#">Tab 4</a></li>
    <li><a href="#">Tab 5</a></li>
    <li><a href="#">Tab 6</a></li>
    <li><a href="#">Tab 7</a></li>
    <li><a href="#">Tab 8</a></li>
    <li><a href="#">Tab 9</a></li>
    <li><a href="#">Tab 10</a></li>
    <li><a href="#">Tab 11</a></li>
    <li><a href="#">Tab 12</a></li>
    <li><a href="#">Tab Last</a></li>
    <li class="dropdown pull-right stackable-dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        More <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
      </ul>
    </li>
  </ul>
  <div>
    <p>Text...</p>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="sheet-example-with-nested-tabs">Example with nested tabs</h3>
  </div>
  <div class="bs-example bs-sheet"
       data-example-id="sheet-example-with-nested-tab">
    <div class="sheet">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#">Tab 1</a></li>
        <li><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3</a></li>
      </ul>
      <div>
        <p>Text...</p>
        <ul class="nav nav-tabs">
          <li class="active"><a href="#">Tab 1</a></li>
          <li><a href="#">Tab 2</a></li>
          <li><a href="#">Tab 3</a></li>
        </ul>
        <div>
          <p>Text...</p>
        </div>
      </div>
    </div>
  </div>
</div>
~~~ html
<div class="sheet">
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Tab 1</a></li>
    <li><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
  </ul>
  <div>
    <p>Text...</p>
    <ul class="nav nav-tabs">
      <li class="active"><a href="#">Tab 1</a></li>
      <li><a href="#">Tab 2</a></li>
      <li><a href="#">Tab 3</a></li>
    </ul>
    <div>
      <p>Text...</p>
    </div>
  </div>
</div>
~~~
