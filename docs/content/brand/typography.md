<div class="example">
  <div class="sheet-header">
    <h3 id="headings">Headings</h3>
  </div>

  <div class="bs-example bs-sheet" data-example-id="headings">
    <h1>h1. Bootstrap heading</h1>
    <h2>h2. Bootstrap heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
  </div>
</div>
~~~ html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="customizing-headings">Customizing headings</h3>
  </div>

  <div class="bs-example bs-sheet" data-example-id="customizing-headings">
    <h3>
      Fancy display heading
      <small class="text-muted">With faded secondary text</small>
    </h3>
  </div>
</div>
~~~ html
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="lead">Lead</h3>
  </div>

  <p>Make a paragraph stand out by adding <code>.lead</code>.</p>

  <div class="bs-example bs-sheet" data-example-id="lead">
    <p class="lead">
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>
  </div>
</div>
~~~ html
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="blockquotes">Blockquotes</h3>
  </div>

  <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class="blockquote"&gt;</code> around any HTML as the quote..</p>

  <div class="bs-example bs-sheet" data-example-id="blockquotes">
    <blockquote class="blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
  </div>
</div>
~~~ html
<blockquote class="blockquote">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="blockquotes-with-source">Blockquotes with source</h3>
  </div>

  <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class="blockquote"&gt;</code> around any HTML as the quote.</p>

  <div class="bs-example bs-sheet" data-example-id="blockquotes-with-source">
    <blockquote class="blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
~~~ html
<blockquote class="blockquote">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="unordered-list">Unordered list</h3>
  </div>

  <p>A list of items in which the order does <em>not</em> explicitly matter.</p>

  <div class="bs-example bs-sheet" data-example-id="unordered-list">
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
  </div>
</div>
~~~ html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="ordered-list">Ordered list</h3>
  </div>

  <p>A list of items in which the order <em>does</em> explicitly matter.</p>

  <div class="bs-example bs-sheet" data-example-id="ordered-list">
    <ol>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit</li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ol>
  </div>
</div>
~~~ html
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="list-unstyled">List unstyled</h3>
  </div>

  <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>

  <div class="bs-example bs-sheet" data-example-id="list-unstyled">
    <ul class="list-unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
  </div>
</div>
~~~ html
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="description">Description</h3>
  </div>

  <p>A list of terms with their associated descriptions.</p>

  <div class="bs-example bs-sheet"
       data-example-id="description">
    <dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>
  </div>
</div>
~~~ html
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="horizontal-description">Horizontal description</h3>
  </div>

  <p>Make terms and descriptions in <code>&lt;dl&gt;</code> line up side-by-side. Starts off stacked like default <code>&lt;dl&gt;</code>s, but when the navbar expands, so do these. For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.</p>

  <div class="bs-example bs-sheet"
       data-example-id="horizontal-description">
    <dl class="dl-horizontal">
      <dt class="text-truncate">Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>

      <dt class="text-truncate">Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>

      <dt class="text-truncate">Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt class="text-truncate">Very long term can be truncated</dt>
      <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
    </dl>
  </div>
</div>
~~~ html
<dl class="dl-horizontal">
  <dt class="text-truncate">Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>

  <dt class="text-truncate">Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>

  <dt class="text-truncate">Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="text-truncate">Very long term can be truncated</dt>
  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
~~~
