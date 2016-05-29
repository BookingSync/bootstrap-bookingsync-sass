# Buttons

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-button-tags">Button tags</h3>
  </div>

  <p>Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.</p>

  <div class="bs-callout bs-callout-warning">
    <h4>Context-specific usage</h4>
    <p>While button classes can be used on <code>&lt;a&gt;</code> and <code>&lt;button&gt;</code> elements, only <code>&lt;button&gt;</code> elements are supported within our nav and navbar components.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-button-tags">
    <a class="btn btn-secondary" href="#" role="button">Link</a>
    <button class="btn btn-secondary" type="submit">Button</button>
    <input class="btn btn-secondary" type="button" value="Input">
    <input class="btn btn-secondary" type="submit" value="Submit">
  </div>
</div>
~~~ html
<a class="btn btn-secondary" href="#" role="button">Link</a>
<button class="btn btn-secondary" type="submit">Button</button>
<input class="btn btn-secondary" type="button" value="Input">
<input class="btn btn-secondary" type="submit" value="Submit">
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="forms-example-options">Options</h3>
  </div>

  <p>Use any of the available button classes to quickly create a styled button.</p>

  <div class="bs-example bs-sheet" data-example-id="forms-example-options">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-default">Default</button>
    <button class="btn btn-secondary-inverse btn-round" type="button">
      <i class="fa fa-close"></i>
    </button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-link">Link</button>
  </div>
</div>
~~~ html

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Secondary, outline button -->
<button type="button" class="btn btn-secondary">Secondary</button>
<!-- DEPRECATED, kept for Bootstap 3.x support: Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Secondary inverse -->
<button class="btn btn-secondary-inverse btn-round" type="button">
  <i class="fa fa-close"></i>
</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-sizes">Sizes</h3>
  </div>

  <p>Need smaller buttons? Add <code>.btn-sm</code> for additional sizes.</p>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-sizes">
    <p>
      <button type="button" class="btn btn-primary">Default button</button>
      <button type="button" class="btn btn-secondary">Default button</button>
    </p>
    <p>
      <button type="button" class="btn btn-primary btn-sm">Small button</button>
      <button type="button" class="btn btn-secondary btn-sm">Small button</button>
    </p>
  </div>
</div>
~~~ html
<p>
  <button type="button" class="btn btn-primary">Default button</button>
  <button type="button" class="btn btn-secondary">Default button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-sm">Small button</button>
  <button type="button" class="btn btn-secondary btn-sm">Small button</button>
</p>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-active-state">Active State</h3>
  </div>

  <p>For <code>&lt;button&gt;</code> elements, this is done via <code>:active</code>. For <code>&lt;a&gt;</code> elements, it's done with <code>.active</code>. However, you may use <code>.active</code> on <code>&lt;button&gt;</code>s (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the active state programmatically.</p>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-active-state">
    <button type="button" class="btn btn-primary active">Primary button</button>
    <button type="button" class="btn btn-secondary active">Button</button>
    <a href="#" class="btn btn-primary active" role="button">Primary link</a>
    <a href="#" class="btn btn-secondary active" role="button">Link</a>
  </div>
</div>
~~~ html
<button type="button" class="btn btn-primary active">Primary button</button>
<button type="button" class="btn btn-secondary active">Button</button>
<a href="#" class="btn btn-primary active" role="button">Primary link</a>
<a href="#" class="btn btn-secondary active" role="button">Link</a>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-loading">Loading</h3>
  </div>

  <p>This is done via <code>.btn-loading</code>.</p>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-loading">
    <button type="button" class="btn btn-primary btn-loading">Loading...</button>
    <button type="button" class="btn btn-secondary btn-loading">Loading...</button>
    <a href="#" class="btn btn-primary btn-loading" role="button">Loading...</a>
    <a href="#" class="btn btn-secondary btn-loading" role="button">Loading...</a>
  </div>
</div>
~~~ html
<button type="button" class="btn btn-primary btn-loading">Loading...</button>
<button type="button" class="btn btn-secondary btn-loading">Loading...</button>
<a href="#" class="btn btn-primary btn-loading" role="button">Loading...</a>
<a href="#" class="btn btn-secondary btn-loading" role="button">Loading...</a>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-group">Group</h3>
  </div>

  <p>Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.</p>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-group">
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-secondary">Left</button>
      <button type="button" class="btn btn-secondary">Middle</button>
      <button type="button" class="btn btn-secondary">Right</button>
    </div>
  </div>
</div>
~~~ html
<div class="btn-group" role="group" aria-label="...">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-nesting">Nesting</h3>
  </div>

  <p>Place a .btn-group within another <code>.btn-group</code> when you want dropdown menus mixed with a series of buttons.</p>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-nesting">
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-secondary">1</button>
      <button type="button" class="btn btn-secondary">2</button>

      <div class="btn-group" role="group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
~~~ html
<div class="btn-group" role="group" aria-label="...">
  <button type="button" class="btn btn-secondary">1</button>
  <button type="button" class="btn btn-secondary">2</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Dropdown link</a></li>
      <li><a href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="buttons-example-radio-buttons">Radio buttons</h3>
  </div>

  <div class="bs-example bs-sheet" data-example-id="buttons-example-radio-buttons">
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
      </label>
    </div>
  </div>
</div>
~~~ html
<div class="btn-group" role="group" aria-label="...">
  <div class="btn-group" data-toggle="buttons">
    <label class="btn btn-secondary active">
      <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
    </label>
  </div>
</div>
~~~
