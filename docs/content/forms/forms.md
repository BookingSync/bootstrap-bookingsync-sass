<div class="example">
  <div class="sheet-header">
    <h3 id="basic-form">Basic form</h3>
  </div>

  <p>
    Individual form controls automatically receive some global styling. All textual
    <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>
    elements with <code>.form-control</code> are set to <code>width: 100%;</code> by default.
    Wrap labels and controls in <code>.form-group</code> for optimum spacing.
  </p>

  <div class="bs-callout bs-callout-warning">
    <h4>Don't mix form groups with input groups</h4>
    <p>Do not mix form groups directly with <a href="/css/#input-groups">input groups</a>.
    Instead, nest the input group inside of the form group.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="basic-form">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group">
        <label for="exampleTextarea1">Comment</label>
        <textarea class="form-control" id="exampleTextarea1" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

~~~ html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group">
    <label for="exampleTextarea1">Comment</label>
    <textarea class="form-control" id="exampleTextarea1" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="inline-form">Inline form</h3>
  </div>

  <p>Add <code>.form-inline</code> to your form (which doesn't have to be a
  <code>&lt;form&gt;</code>) for left-aligned and inline-block controls.<br>
  <strong>This only applies to forms within viewports that are at least 768px wide.</strong></p>

  <div class="bs-callout bs-callout-danger">
    <h4>May require custom widths</h4>
    <p>Inputs and selects have `width: 100%;` applied by default in Bootstrap. Within inline forms, we reset that to `width: auto;` so multiple controls  can reside on the same line. Depending on your layout, additional custom widths may be required.</p>
  </div>

  <div class="bs-callout bs-callout-warning">
    <h4>Always add labels</h4>
    <p>Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using   the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria- labelledby` or `title` attribute. If none of these is present, screen readers may resort to using the `placeholder` attribute, if present, but note  that use of `placeholder` as a replacement for other labelling methods is not advised.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="inline-form">
    <form class="form-inline">
      <div class="form-group">
        <label for="exampleInputName2">Name</label>
        <input type="text" class="form-control" id="exampleInputName2">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail2">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail2">
      </div>
      <button type="submit" class="btn btn-primary">Send invitation</button>
    </form>
  </div>
</div>

~~~ html
<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2">
  </div>
  <button type="submit" class="btn btn-primary">Send invitation</button>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="inline-form-with-checkboxes">Inline form with checkboxes</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="inline-form-with-checkboxes">
    <form class="form-inline">
      <div class="form-group">
        <label for="exampleInputEmail3">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail3">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword3">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword3">
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</div>

~~~ html
<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputEmail3">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail3">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword3">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword3">
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="inline-form-with-input-group">Inline form with input group</h3>
  </div>
  <div class="bs-example bs-sheet" 
       data-example-id="inline-form-with-input-group">
    <form class="form-inline">
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
        <div class="input-group">
          <div class="input-group-addon">$</div>
          <input type="text" class="form-control" id="exampleInputAmount"   placeholder="Amount">
          <div class="input-group-addon">.00</div>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">$</div>
          <label for="exampleInputAmountWithLabel">Amount (in dollars)
          </label>
          <input type="text" class="form-control" id="exampleInputAmountWithLabel">
          <div class="input-group-addon">.00</div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Transfer cash</button>
    </form>
  </div>
</div>
~~~ html
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
      <div class="input-group-addon">.00</div>
    </div>
  </div>
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <label for="exampleInputAmountWithLabel">Amount (in dollars)
      </label>
      <input type="text" class="form-control" id="exampleInputAmountWithLabel">
      <div class="input-group-addon">.00</div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Transfer cash</button>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="horizontal-form">Horizontal form</h3>
  </div>
  <div class="bs-callout bs-callout-info">
    <h4>Not Recommended</h4>
    <p>BookingSync UI Kit does not recommend using horizontal forms.</p>
  </div>
</div>

<div class="example">
  <div class="sheet-header">
    <h3 id="inputs">Inputs</h3>
  </div>
  <p>
    Most common form control, text-based input fields. Includes support for all HTML5 types:
    <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>,
    <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>,
    <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>,
    <code>tel</code>, and <code>color</code>.
  </p>

  <div class="bs-callout bs-callout-danger">
    <h4>Type declaration required</h4>
    <p>Inputs will only be fully styled if their `type` is properly declared.</p>
  </div>

  <div class="bs-callout bs-callout-info">
    <h4>Input groups</h4>
    <p>To add integrated text or buttons before and/or after any text-based
    <code>&lt;input&gt;</code>, <a href="../css/#input-groups">check out the input group
    component</a>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="inputs">
    <form>
      <input type="text" class="form-control" placeholder="Text input">
    </form>
  </div>
</div>

~~~ html
<input type="text" class="form-control" placeholder="Text input">
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="textarea">Textarea</h3>
  </div>

  <p>Form control which supports multiple lines of text.
  Change <code>rows</code> attribute as necessary.</p>

  <div class="bs-example bs-sheet" data-example-id="textarea">
    <form>
      <div class="form-group">
        <textarea class="form-control" rows="3" placeholder="Textarea"></textarea>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group">
  <textarea class="form-control" rows="3"></textarea>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="checkboxes-and-radios">Checkboxes and radios (stacked)</h3>
  </div>

  <p>Checkboxes are for selecting one or several options in a list, while radios are for
  selecting one option from many.</p>

  <div class="bs-callout bs-callout-info">
    <h4>Disabled checkboxes and radios</h4>
    <p>To provide a "not-allowed" cursor on hover of the parent <code>&lt;label&gt;</code>,
    you'll need to add the <code>.disabled</code> class to the parent <code>.radio</code>,
    <code>.radio-inline</code>, <code>.checkbox</code>, or <code>.checkbox-inline</code>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="checkboxes-and-radios">
    <form>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="">
          Option one is this and that&mdash;be sure to include why it's great
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="" disabled>
          Option two is disabled
        </label>
      </div>
      <br>
      <div class="radio">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios1"  value="option1" checked>
          Option one is this and that&mdash;be sure to include why it's great
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2"  value="option2">
          Option two can be something else and selecting it will deselect option  one
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios3"  value="option3" disabled>
          Option three is disabled
        </label>
      </div>
    </form>
  </div>
</div>
~~~ html
<div class="checkbox">
  <label>
    <input type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox" value="" disabled>
    Option two is disabled
  </label>
</div>

<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
    Option two can be something else and selecting it will deselect option one
  </label>
</div>
<div class="radio ">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
    Option three is disabled
  </label>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="inline-checkboxes-and-radios">Inline checkboxes and radios</h3>
  </div>

  <p>Use the <code>.checkbox-inline</code> or <code>.radio-inline</code> classes on a series of
  checkboxes or radios for controls that appear on the same line.</p>

  <div class="bs-example bs-sheet" data-example-id="inline-checkboxes-and-radios">
    <form>
      <label class="checkbox-inline">
        <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
      </label>
    </form>
    <br>
    <form>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value=" option1"> 1
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value=" option2"> 2
      </label>
      <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value=" option3"> 3
      </label>
    </form>
  </div>
</div>
~~~ html
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
</label>

<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3
</label>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="checkboxes-and-radios-without-label-text">
      Checkboxes and radios without label text
    </h3>
  </div>

  <p>Should you have no text within the <code>&lt;label&gt;</code>, the input is positioned as
  you'd expect. Remember to still provide some form of label for assistive technologies
  (for instance, using <code>aria-label</code>).</p>

  <div class="bs-callout bs-callout-info">
    <h4>Limitation</h4>
    <p>Currently only works on non-inline checkboxes and radios.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="checkboxes-and-radios-without-label-text">
    <form>
      <div class="checkbox">
        <label>
          <input type="checkbox" id="blankCheckbox" value="option1" aria-label="  Checkbox without label text">
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="blankRadio" id="blankRadio1" value="option1"  aria-label="Radio button without label text">
        </label>
      </div>
    </form>
  </div>
</div>
~~~ html
<div class="checkbox">
  <label>
    <input type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
  </label>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="select">Select</h3>
  </div>

  <p>Note that many native select menus—namely in Safari and Chrome—have rounded corners that
  cannot be modified via <code>border-radius</code> properties.</p>

  <div class="bs-callout bs-callout-info">
    <h4>Chosen</h4>
    <p>Using Chosen is recommended for a better design and improved experience. More details in
    the <a href="/components/#chosen-select">Chosen component</a>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="select">
    <form>
      <div class="select">
        <div class="form-group">
          <label for="destination">Destination</label>
          <select class="form-control" id="destination">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="select">
  <div class="form-group">
    <label for="destination">Destination</label>
    <select class="form-control" id="destination">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="multiple-select">Multiple Select</h3>
  </div>

  <p>For <code>&lt;select&gt;</code> controls with the <code>multiple</code> attribute,
  multiple options are shown by default.</p>

  <div class="bs-callout bs-callout-info">
    <h4>Chosen</h4>
    <p>Using Chosen is recommended for a better design and improved experience. More details in
    the <a href="/components/#chosen-multiple-select">Chosen component</a>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="multiple-select">
    <form>
      <div class="select">
        <div class="form-group">
          <label for="destinations">Destinations</label>
          <select multiple class="form-control" id="destinations">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</div>
~~~ html
<div class="select">
  <div class="form-group">
    <label for="destinations">Destinations</label>
    <select multiple class="form-control" id="destinations">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="static-control">Static control</h3>
  </div>

  <p>When you need to place plain text next to a form label within a form, use the
  <code>.form-control-static</code> class on a <code>&lt;p&gt;.</code></p>

  <div class="bs-example bs-sheet" data-example-id="static-control">
    <form class="form-inline">
      <div class="form-group">
        <label class="sr-only">Email</label>
        <p class="form-control-static">email@example.com</p>
      </div>
      <div class="form-group">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="password" class="form-control" id="inputPassword2"   placeholder="Password">
      </div>
      <button type="submit" class="btn btn-default">Confirm identity</button>
    </form>
  </div>
</div>

~~~ html
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only">Email</label>
    <p class="form-control-static">email@example.com</p>
  </div>
  <div class="form-group">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-default">Confirm identity</button>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="focus-state">Focus state</h3>
  </div>

  <p>We remove the default <code>outline</code> styles on some form controls and adjust labels
  and border-bottom placement and color for <code>:focus</code>.</p>

  <div class="bs-callout bs-callout-info">
    <h4>Demo <code>:focus</code> state</h4>
    <p>The above example forces the <code>focused</code> class normally set by javascript on the
    <code>.form-group</code> parent to demonstrate the <code>:focus</code> state on a
    <code>.form-group .form-control</code>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="focus-state">
    <form>
      <div class="form-group focused">
        <label for="focusedInput2">Focus state</label>
        <input class="form-control" id="focusedInput2" type="text"
               value="Demonstrative focus state">
      </div>
      <div class="form-group focused">
        <label for="focusedTextarea">Comment</label>
        <textarea class="form-control" id="focusedTextarea" rows="5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
        </textarea>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group focused">
  <label for="focusedInput2">Focus state</label>
  <input class="form-control" id="focusedInput2" type="text"
         value="Demonstrative focus state">
</div>
<div class="form-group focused">
  <label for="focusedTextarea">Comment</label>
  <textarea class="form-control" id="focusedTextarea" rows="5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
  </textarea>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="filled-state">Filled state</h3>
  </div>

  <div class="bs-callout bs-callout-info">
    <h4>Demo filled state</h4>
    <p>The above example forces the <code>filled</code> class normally set by javascript on the
    <code>.form-froup</code> parent to demonstrate the filled state on a
    <code>.form-group .form-control</code>.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="filled-state">
    <form>
      <div class="form-group filled">
        <label for="filledInput">Filled state</label>
        <input class="form-control" id="filledInput" type="text"
               value="Demonstrative filled state">
      </div>
      <div class="form-group filled">
        <label for="filledTextarea">Comment</label>
        <textarea class="form-control" id="filledTextarea" rows="5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
        </textarea>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group filled">
  <label for="filledInput">Filled state</label>
  <input class="form-control" id="filledInput" type="text"
         value="Demonstrative filled state">
</div>
<div class="form-group filled">
  <label for="filledTextarea">Comment</label>
  <textarea class="form-control" id="filledTextarea" rows="5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
  </textarea>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="disabled-state">Disabled state</h3>
  </div>

  <p>Add the <code>disabled</code> boolean attribute on an input to prevent user interactions.
  Disabled inputs appear lighter and add a <code>not-allowed</code> cursor.</p>

  <div class="bs-example bs-sheet" data-example-id="disabled-state">
    <form>
      <div class="form-group">
        <label for="disabledInput">Disabled state</label>
        <input class="form-control" id="disabledInput" type="text"
               value="Disabled input here…" disabled>
      </div>
      <div class="form-group">
        <label for="disabledEmptyInput">Disabled state on empty input</label>
        <input class="form-control" id="disabledEmptyInput" type="text" disabled>
      </div>
      <div class="form-group">
        <label for="disabledTextarea">Disabled comment</label>
        <textarea class="form-control" id="disabledTextarea" rows="5" disabled>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
        </textarea>
      </div>
      <div class="form-group">
        <label for="disabledEmptyTextarea">Disabled comment on empty textarea</label>
        <textarea class="form-control" id="disabledEmptyTextarea" rows="5" disabled ></textarea>
      </div>
      <div class="form-group">
        <label for="disabledSelect">Disabled select menu</label>
        <select id="disabledSelect" class="form-control" disabled>
          <option>Disabled select</option>
        </select>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" disabled> Can't check this
        </label>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group">
  <label for="disabledInput">Disabled state</label>
  <input class="form-control" id="disabledInput" type="text"
         value="Disabled input here…" disabled>
</div>
<div class="form-group">
  <label for="disabledEmptyInput">Disabled state on empty input</label>
  <input class="form-control" id="disabledEmptyInput" type="text" disabled>
</div>
<div class="form-group">
  <label for="disabledTextarea">Disabled comment</label>
  <textarea class="form-control" id="disabledTextarea" rows="5" disabled>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
  </textarea>
</div>
<div class="form-group">
  <label for="disabledEmptyTextarea">Disabled comment on empty textarea</label>
  <textarea class="form-control" id="disabledEmptyTextarea" rows="5" disabled></textarea>
</div>
<div class="form-group">
  <label for="disabledSelect">Disabled select menu</label>
  <select id="disabledSelect" class="form-control" disabled>
    <option>Disabled select</option>
  </select>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox" disabled> Can't check this
  </label>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="disabled-fieldsets">Disabled fieldsets</h3>
  </div>

  <p>Add the <code>disabled</code> attribute to a <code>&lt;fieldset&gt;</code> to disable all
  the controls within the <code>&lt;fieldset&gt;</code> at once.</p>

  <div class="bs-callout bs-callout-warning">
    <h4>Caveat about link functionality of <code>&lt;a&gt;</code></h4>
    <p>By default, browsers will treat all native form controls (<code>&lt;input&gt;</code>,
    <code>&lt;select&gt;</code> and `<code>&lt;button&gt;</code>` elements) inside a
    <code>&lt;fieldset disabled&gt;</code> as disabled, preventing both keyboard and mouse
    interactions on them. However, if your form also includes
    <code>&lt;a ... class="btn btn-*"&gt;</code> elements, these will only be given a style
    of <code>pointer-events: none</code>. As noted in the section about
    <a href="#buttons-disabled">disabled state for buttons</a> (and specifically in the
    sub-section for anchor elements), this CSS property is not yet standardized and isn't
    fully supported in Opera 18 and below, or in Internet Explorer 11, and won't prevent
    keyboard users from being able to focus or activate these links. So to be safe, use
    custom JavaScript to disable such links.</p>
  </div>

  <div class="bs-callout bs-callout-danger">
    <h4>Cross-browser compatibility</h4>
    <p>While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below
    don't fully support the <code>disabled</code> attribute on a <code>&lt;fieldset&gt;</code>.
    Use custom JavaScript to disable the fieldset in these browsers.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="disabled-fieldsets">
    <form>
      <fieldset disabled>
        <div class="form-group">
          <label for="disabledInputFromFieldset">Disabled state</label>
          <input class="form-control" id="disabledInputFromFieldset" type="text"
                 value="Disabled input here…">
        </div>
        <div class="form-group">
          <label for="disabledEmptyInputFromFieldset">Disabled state on empty input</label>
          <input class="form-control" id="disabledEmptyInputFromFieldset" type="text">
        </div>
        <div class="form-group">
          <label for="disabledTextareaFromFieldset">Disabled comment</label>
          <textarea class="form-control" id="disabledTextareaFromFieldset" rows="5">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit   quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus  et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus  ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus  arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed   ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus   eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus  vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula  tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt   lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam.   Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
          </textarea>
        </div>
        <div class="form-group">
          <label for="disabledEmptyTextareaFromFieldset">Disabled comment on empty textarea</label>
          <textarea class="form-control" id="disabledEmptyTextareaFromFieldset"
                    rows="5" disabled></textarea>
        </div>
        <div class="form-group">
          <label for="disabledSelectFromFieldset">Disabled select menu</label>
          <select id="disabledSelectFromFieldset" class="form-control">
            <option>Disabled select</option>
          </select>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> Can't check this
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</div>

~~~ html
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledInputFromFieldset">Disabled state</label>
      <input class="form-control" id="disabledInputFromFieldset" type="text"
             value="Disabled input here…">
    </div>
    <div class="form-group">
      <label for="disabledEmptyInputFromFieldset">Disabled state on empty input</label>
      <input class="form-control" id="disabledEmptyInputFromFieldset" type="text">
    </div>
    <div class="form-group">
      <label for="disabledTextareaFromFieldset">Disabled comment</label>
      <textarea class="form-control" id="disabledTextareaFromFieldset" rows="5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
      </textarea>
    </div>
    <div class="form-group">
      <label for="disabledEmptyTextareaFromFieldset">Disabled comment on empty textarea</label>
      <textarea class="form-control" id="disabledEmptyTextareaFromFieldset" rows="5" disabled></textarea>
    </div>
    <div class="form-group">
      <label for="disabledSelectFromFieldset">Disabled select menu</label>
      <select id="disabledSelectFromFieldset" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="readonly-state">Readonly state</h3>
  </div>

  <p>Add the <code>readonly</code> boolean attribute on an input to prevent modification of
  the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain
  the standard cursor.</p>

  <div class="bs-example bs-sheet" data-example-id="readonly-state">
    <form>
      <div class="form-group">
        <label for="readonlyInput">Readonly state</label>
        <input class="form-control" id="readonlyInput" type="text"
               value="Readonly input here…" readonly>
      </div>
      <div class="form-group">
        <label for="readonlyEmptyInput">Readonly state on empty input</label>
        <input class="form-control" id="readonlyEmptyInput" type="text" readonly>
      </div>
      <div class="form-group">
        <label for="readonlyTextarea">Readonly comment</label>
        <textarea class="form-control" id="readonlyTextarea" rows="5" readonly>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit   quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus  et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus  ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus  arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed   ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus   eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus  vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula  tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt   lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam.   Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat  tristique.
        </textarea>
      </div>
      <div class="form-group">
        <label for="readonlyEmptyTextarea">Readonly comment on empty textarea</label>
        <textarea class="form-control" id="readonlyEmptyTextarea" rows="5" readonly></textarea>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group">
  <label for="readonlyInput">Readonly state</label>
  <input class="form-control" id="readonlyInput" type="text"
         value="Readonly input here…" readonly>
</div>
<div class="form-group">
  <label for="readonlyEmptyInput">Readonly state on empty input</label>
  <input class="form-control" id="readonlyEmptyInput" type="text" readonly>
</div>
<div class="form-group">
  <label for="readonlyTextarea">Readonly comment</label>
  <textarea class="form-control" id="readonlyTextarea" rows="5" readonly>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a blandit quam, at aliquam eros. Ut faucibus odio justo, maximus facilisis ante tempus et. Suspendisse quis mauris id metus fermentum lacinia at id magna. Phasellus ullamcorper risus nunc, et efficitur enim efficitur varius. Sed auctor cursus arcu, vel ullamcorper purus bibendum non. Integer elementum, lacus sed ullamcorper vehicula, urna ipsum tristique nulla, eu vulputate libero risus eget lorem. Fusce sollicitudin justo arcu, sit amet pulvinar mauris faucibus vel. Fusce lectus enim, auctor ac ex ut, egestas tempor ipsum. Donec ligula tellus, tempor sit amet tellus quis, euismod elementum risus. Nullam tincidunt lectus non augue iaculis pellentesque. Vivamus eu sem et arcu varius aliquam. Nulla non ante sit amet magna blandit sagittis. Cras eleifend ex eget volutpat tristique.
  </textarea>
</div>
<div class="form-group">
  <label for="readonlyEmptyTextarea">Readonly comment on empty textarea</label>
  <textarea class="form-control" id="readonlyEmptyTextarea" rows="5" readonly></textarea>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="help-text">Help text</h3>
  </div>

  <p>Block level help text for form controls.</p>

  <div class="bs-callout bs-callout-info">
    <h4>Associating help text with form controls</h4>
    <p>Help text should be explicitly associated with the form control it relates to using the
    <code>aria-describedby</code> attribute. This will ensure that assistive technologies – such
    as screen readers – will announce this help text when the user focuses or enters the
    control.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="help-text">
    <form>
      <div class="form-group">
        <label for="inputHelpBlock">Input with help text</label>
        <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
      </div>
      <span id="helpBlock" class="help-block">A block of help text that breaks onto a new line
      and may extend beyond one line.</span>
    </form>
  </div>
</div>

~~~ html
<label for="inputHelpBlock">Input with help text</label>
<input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
...
<span id="helpBlock" class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="validation-states">Validation states</h3>
  </div>

  <p>Bootstrap includes validation styles for error, warning, and success states on form controls.
  To use, add <code>.has-warning</code>, <code>.has-error</code>, or <code>.has-success</code>
  to the parent element. Any <code>.control-label</code>, <code>.form-control</code>, and
  <code>.help-block</code> within that element will receive the validation styles.</p>

  <div class="bs-example bs-sheet" data-example-id="validation-states">
    <form>
      <div class="form-group has-success">
        <label class="control-label" for="inputSuccess1">Input with success</label>
        <input type="text" class="form-control" id="inputSuccess1" aria-describedby ="helpBlock2">
        <span id="helpBlock2" class="help-block">A block of help text that breaks onto a new
        line and may extend beyond one line.</span>
      </div>
      <div class="form-group has-warning">
        <label class="control-label" for="inputWarning1">Input with warning</label>
        <input type="text" class="form-control" id="inputWarning1">
      </div>
      <div class="form-group has-error">
        <label class="control-label" for="inputError1">Input with error</label>
        <input type="text" class="form-control" id="inputError1">
      </div>
      <div class="has-success">
        <div class="checkbox">
          <label>
            <input type="checkbox" id="checkboxSuccess" value="option1">
            Checkbox with success
          </label>
        </div>
      </div>
      <div class="has-warning">
        <div class="checkbox">
          <label>
            <input type="checkbox" id="checkboxWarning" value="option1">
            Checkbox with warning
          </label>
        </div>
      </div>
      <div class="has-error">
        <div class="checkbox">
          <label>
            <input type="checkbox" id="checkboxError" value="option1">
            Checkbox with error
          </label>
        </div>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group has-success">
  <label class="control-label" for="inputSuccess1">Input with success</label>
  <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
  <span id="helpBlock2" class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
</div>
<div class="form-group has-warning">
  <label class="control-label" for="inputWarning1">Input with warning</label>
  <input type="text" class="form-control" id="inputWarning1">
</div>
<div class="form-group has-error">
  <label class="control-label" for="inputError1">Input with error</label>
  <input type="text" class="form-control" id="inputError1">
</div>
<div class="has-success">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="checkboxSuccess" value="option1">
      Checkbox with success
    </label>
  </div>
</div>
<div class="has-warning">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="checkboxWarning" value="option1">
      Checkbox with warning
    </label>
  </div>
</div>
<div class="has-error">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="checkboxError" value="option1">
      Checkbox with error
    </label>
  </div>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="validation-with-optional-icons">Validation with optional icons</h3>
  </div>

  <p>You can also add optional feedback icons with the addition of <code>.has-feedback</code>
  and the right icon.</p>

  <div class="bs-callout bs-callout-danger">
    <h4>Requirements</h4>
    <p>Feedback icons only work with textual <code>&lt;input class="form-control"&gt;</code>
    elements.</p>
  </div>

  <div class="bs-callout bs-callout-warning">
    <h4>Icons, labels, and input groups</h4>
    <p>Manual positioning of feedback icons is required for inputs without a label and for
    <a href="/css#input-groups">input groups</a> with an add-on on the right. You are strongly
    encouraged to provide labels for all inputs for accessibility reasons. If you wish to prevent
    labels from being displayed, hide them with the <code>.sr-only</code> class. If you must do
    without labels, adjust the <code>top</code> value of the feedback icon. For input groups,
    adjust the <code>right</code> value to an appropriate pixel value depending on the width of
    your addon.</p>
  </div>

  <div class="bs-example bs-sheet" data-example-id="validation-with-optional-icons">
    <form>
      <div class="form-group has-success has-feedback">
        <label class="control-label" for="inputSuccess2">Input with success</label>
        <input type="text" class="form-control" id="inputSuccess2"
               aria-describedby="inputSuccess2Status">
        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        <span id="inputSuccess2Status" class="sr-only">(success)</span>
      </div>
      <div class="form-group has-warning has-feedback">
        <label class="control-label" for="inputWarning2">Input with warning</label>
        <input type="text" class="form-control" id="inputWarning2"
               aria-describedby="inputWarning2Status">
        <span class="glyphicon glyphicon-warning-sign form-control-feedback"
              aria-hidden="true"></span>
        <span id="inputWarning2Status" class="sr-only">(warning)</span>
      </div>
      <div class="form-group has-error has-feedback">
        <label class="control-label" for="inputError2">Input with error</label>
        <input type="text" class="form-control" id="inputError2"
               aria-describedby="inputError2Status">
        <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        <span id="inputError2Status" class="sr-only">(error)</span>
      </div>
      <div class="form-group has-success has-feedback">
        <div class="input-group">
          <span class="input-group-addon">@</span>
          <label class="control-label" for="inputGroupSuccess1">Input group with success</label>
          <input type="text" class="form-control" id="inputGroupSuccess1"
                 aria-describedby="inputGroupSuccess1Status">
        </div>
        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        <span id="inputGroupSuccess1Status" class="sr-only">(success)</span>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputSuccess2">Input with success</label>
  <input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status">
  <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
</div>
<div class="form-group has-warning has-feedback">
  <label class="control-label" for="inputWarning2">Input with warning</label>
  <input type="text" class="form-control" id="inputWarning2" aria-describedby="inputWarning2Status">
  <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
  <span id="inputWarning2Status" class="sr-only">(warning)</span>
</div>
<div class="form-group has-error has-feedback">
  <label class="control-label" for="inputError2">Input with error</label>
  <input type="text" class="form-control" id="inputError2" aria-describedby="inputError2Status">
  <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
  <span id="inputError2Status" class="sr-only">(error)</span>
</div>
<div class="form-group has-success has-feedback">
  <div class="input-group">
    <span class="input-group-addon">@</span>
    <label class="control-label" for="inputGroupSuccess1">Input group with success</label>
    <input type="text" class="form-control" id="inputGroupSuccess1" aria-describedby="inputGroupSuccess1Status">
  </div>
  <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
  <span id="inputGroupSuccess1Status" class="sr-only">(success)</span>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="validation-with-optional-icons-in-horizontal-and-inline-forms">
      Validation with optional icons in horizontal and inline forms
    </h3>
  </div>

  <div class="bs-callout bs-callout-info">
    <h4>Not Recommended</h4>
    <p>BookingSync UI Kit does not recommend using horizontal forms.</p>
  </div>

  <div class="bs-example bs-sheet"
       data-example-id="validation-with-optional-icons-in-horizontal-and-inline-forms">
    <form class="form-inline">
      <div class="form-group has-success has-feedback">
        <label class="control-label" for="inputSuccess4">Input with success</label>
        <input type="text" class="form-control" id="inputSuccess4"
               aria-describedby="inputSuccess4Status">
        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="  true"></span>
        <span id="inputSuccess4Status" class="sr-only">(success)</span>
      </div>
    </form>
    <br>
    <form class="form-inline">
      <div class="form-group has-success has-feedback">
        <div class="input-group">
          <span class="input-group-addon">@</span>
          <label class="control-label" for="inputGroupSuccess3">Input group with  success</label>
          <input type="text" class="form-control" id="inputGroupSuccess3"
                 aria-describedby="inputGroupSuccess3Status">
        </div>
        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        <span id="inputGroupSuccess3Status" class="sr-only">(success)</span>
      </div>
    </form>
  </div>
</div>

~~~ html
<form class="form-inline">
  <div class="form-group has-success has-feedback">
    <label class="control-label" for="inputSuccess4">Input with success</label>
    <input type="text" class="form-control" id="inputSuccess4" aria-describedby="inputSuccess4Status">
    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
    <span id="inputSuccess4Status" class="sr-only">(success)</span>
  </div>
</form>
<form class="form-inline">
  <div class="form-group has-success has-feedback">
    <div class="input-group">
      <span class="input-group-addon">@</span>
      <label class="control-label" for="inputGroupSuccess3">Input group with success</label>
      <input type="text" class="form-control" id="inputGroupSuccess3" aria-describedby="inputGroupSuccess3Status">
    </div>
    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
    <span id="inputGroupSuccess3Status" class="sr-only">(success)</span>
  </div>
</form>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="height-sizing">Height sizing</h3>
  </div>

  <p>Set heights using classes like <code>.input-lg</code>. Create taller or shorter form
  controls that match button sizes.</p>

  <div class="bs-example bs-sheet" data-example-id="height-sizing">
    <form>
      <div class="controls">
        <input class="form-control input-lg" type="text" placeholder=".input-lg">
        <input type="text" class="form-control" placeholder="Default input">
        <input class="form-control input-sm" type="text" placeholder=".input-sm">

        <select class="form-control input-lg">
          <option value="">.input-lg</option>
        </select>
        <select class="form-control">
          <option value="">Default select</option>
        </select>
        <select class="form-control input-sm">
          <option value="">.input-sm</option>
        </select>
      </div>
    </form>
  </div>
</div>

~~~ html
<input class="form-control input-lg" type="text" placeholder=".input-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control input-sm" type="text" placeholder=".input-sm">

<select class="form-control input-lg">...</select>
<select class="form-control">...</select>
<select class="form-control input-sm">...</select>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="horizontal-form-group-sizes">Horizontal form group sizes</h3>
  </div>

  <div class="bs-callout bs-callout-info">
    <h4>Not Recommended</h4>
    <p>BookingSync UI Kit does not recommend using horizontal forms.</p>
  </div>
</div>

<div class="example">
  <div class="sheet-header">
    <h3 id="column-sizing">Column sizing</h3>
  </div>

  <p>Set widths using grid column classes like <code>.col-lg-*</code>. Wrap inputs in grid columns,
  or any custom parent element, to easily enforce desired widths.</p>

  <div class="bs-example bs-sheet" data-example-id="column-sizing">
    <form>
      <div class="row">
        <div class="col-xs-2">
          <input type="text" class="form-control" placeholder=".col-xs-2">
        </div>
        <div class="col-xs-3">
          <input type="text" class="form-control" placeholder=".col-xs-3">
        </div>
        <div class="col-xs-4">
          <input type="text" class="form-control" placeholder=".col-xs-4">
        </div>
      </div>
    </form>
  </div>
</div>

~~~ html
<div class="row">
  <div class="col-xs-2">
    <input type="text" class="form-control" placeholder=".col-xs-2">
  </div>
  <div class="col-xs-3">
    <input type="text" class="form-control" placeholder=".col-xs-3">
  </div>
  <div class="col-xs-4">
    <input type="text" class="form-control" placeholder=".col-xs-4">
  </div>
</div>
~~~
