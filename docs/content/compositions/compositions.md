# Compositions

<div class="example">
  <div class="sheet-header">
    <h3 id="compositions-example-section">Section</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body" data-example-id="compositions-example-section">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle navbar-toggle-context"
                  data-toggle="collapse" data-target=".navbar-top-collapse">
            <span class="sr-only">Toggle Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand-container">
            <span class="navbar-brand">
              <h1><i class="fa fa-star"></i> Section Name</h1>
            </span>
          </div>
        </div>
        <div class="collapse navbar-collapse navbar-top-collapse">
          <div class="navbar-right">
            <button class="btn btn-secondary navbar-btn" type="button">Button</button>
            <button class="btn btn-primary navbar-btn" type="button">Call to action</button>
          </div>
        </div>
      </div>
    </nav>
    <section class="main-content">
      <div class="sheet">
        <p>Body</p>
      </div>
    </section>
  </div>
</div>
~~~ html
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle navbar-toggle-context"
              data-toggle="collapse" data-target=".navbar-top-collapse">
        <span class="sr-only">Toggle Navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="navbar-brand-container">
        <span class="navbar-brand">
          <h1><i class="fa fa-star"></i> Section Name</h1>
        </span>
      </div>
    </div>
    <div class="collapse navbar-collapse navbar-top-collapse">
      <div class="navbar-right">
        <button class="btn btn-secondary navbar-btn" type="button">Button</button>
        <button class="btn btn-primary navbar-btn" type="button">Call to action</button>
      </div>
    </div>
  </div>
</nav>
<section class="main-content">
  <div class="sheet">
    <p>Body</p>
  </div>
</section>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="compositions-example-tabulated-content">Tabulated content</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body" data-example-id="compositions-example-tabulated-content">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle navbar-toggle-context"
                  data-toggle="collapse" data-target=".navbar-top-collapse">
            <span class="sr-only">Toggle Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand-container">
            <span class="navbar-brand">
              <h1><i class="fa fa-star"></i> Section Name</h1>
            </span>
          </div>
        </div>
        <div class="collapse navbar-collapse navbar-top-collapse">
          <div class="navbar-right">
            <button class="btn btn-secondary navbar-btn" type="button">Button</button>
            <button class="btn btn-primary navbar-btn" type="button">Call to action</button>
          </div>
        </div>
      </div>
    </nav>
    <section class="main-content">
      <div class="sheet">
        <ul class="nav nav-tabs" data-toggle="stackable" data-target=".stackable-dropdown">
          <li class="active"><a href="#">Tab 1</a></li>
          <li><a href="#">Tab 2</a></li>
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
    </section>
  </div>
</div>
~~~ html
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  ...
</nav>
<section class="main-content">
  <div class="sheet">
    <ul class="nav nav-tabs" data-toggle="stackable" data-target=".stackable-dropdown">
      <li class="active"><a href="#">Tab 1</a></li>
      <li><a href="#">Tab 2</a></li>
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
</section>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="compositions-example-fullscreen-modal">Fullscreen modal</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body" data-example-id="compositions-example-fullscreen-modal">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand-container">
            <span class="navbar-brand">
              <h1><i class="fa fa-star"></i> Section Name</h1>
            </span>
          </div>
        </div>
        <div class="navbar-right">
          <button class="btn btn-sm btn-secondary-inverse btn-round navbar-btn" type="button">
            <span>&times;</span>
          </button>
        </div>
      </div>
    </nav>
    <section class="main-content">
      <div class="sheet sheet-fullscreen">
        <p>Text...</p>
      </div>
    </section>
  </div>
</div>
~~~ html
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  ...
</nav>
<section class="main-content">
  <div class="sheet sheet-fullscreen">
    <p>Text...</p>
  </div>
</section>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="compositions-example-section-with-help">Section with help</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body" data-example-id="compositions-example-section-with-help">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle navbar-toggle-context"
                  data-toggle="collapse" data-target=".navbar-top-collapse">
            <span class="sr-only">Toggle Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand-container">
            <span class="navbar-brand">
              <h1><i class="fa fa-star"></i> Section Name</h1>
            </span>
          </div>
        </div>
        <div class="collapse navbar-collapse navbar-top-collapse">
          <div class="navbar-right">
            <button class="btn btn-secondary navbar-btn" type="button">Button</button>
            <button class="btn btn-primary navbar-btn" type="button">Call to action</button>
          </div>
        </div>
      </div>
    </nav>
    <section class="main-content">
      <section class="annotated-section">
        <header class="annotated-section-annotation">
          <h2 class="annotated-section-title">Section Name</h2>
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <p><a href="#">More Information</a></p>
        </header>
        <div class="annotated-section-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit et tellus eget elementum. Praesent in cursus massa, nec laoreet elit. Nullam eleifend consectetur ligula et dictum. Praesent dignissim sodales nulla laoreet vehicula. Quisque at convallis lacus, at ornare lectus. Cras dapibus placerat sem, iaculis tincidunt ligula sodales non. Suspendisse dolor augue, ultricies condimentum pharetra sed, suscipit sit amet magna. In quis convallis sem. Sed cursus placerat tellus vitae tincidunt. Fusce molestie nisi et nisl pulvinar pulvinar. Nam id mauris lectus. Vivamus nisl neque, tempor nec efficitur quis, tincidunt quis justo. Curabitur pharetra auctor augue a consectetur. Integer lorem elit, fermentum non nulla quis, lobortis tincidunt ex.</p>
          <p>Aenean consectetur in metus sit amet suscipit. Phasellus faucibus ornare tortor sit amet vestibulum. Nulla felis nisl, vestibulum vitae interdum vel, venenatis vitae lacus. Nullam tempus ante ut nibh pharetra, in consequat justo iaculis. Curabitur viverra, orci eu hendrerit malesuada, sapien ex varius sapien, id laoreet diam magna et mi. Fusce finibus justo quis egestas fermentum. Aliquam rhoncus orci libero, ut faucibus felis egestas et. Proin vitae eros lacus. Nulla facilisi. Maecenas ut lacinia justo. Nulla at erat non orci gravida convallis. Aliquam congue leo odio, eu sagittis mauris hendrerit sed. Duis eros augue, viverra ac justo ut, pulvinar venenatis urna. Cras auctor fermentum massa, mattis fringilla neque vehicula et. Ut vitae est a velit accumsan tempus. Duis vel congue risus.</p>
        </div>
      </section>
    </section>
    <section class="main-content">
      <section class="annotated-section">
        <header class="annotated-section-annotation">
          <h2 class="annotated-section-title">Section Name</h2>
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <p><a href="#">More Information</a></p>
        </header>
        <div class="annotated-section-content">
          <p>Body</p>
        </div>
      </section>
    </section>
  </div>
</div>
~~~ html
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  ...
</nav>
<section class="main-content">
  <section class="annotated-section">
    <header class="annotated-section-annotation">
      <h2 class="annotated-section-title">Section Name</h2>
      <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
      <p><a href="#">More Information</a></p>
    </header>
    <div class="annotated-section-content">
      <p>Lorem ipsum dolor sit amet,...</p>
    </div>
  </section>
  <section class="annotated-section">
    <header class="annotated-section-annotation">
      <h2 class="annotated-section-title">Section Name</h2>
      <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
      <p><a href="#">More Information</a></p>
    </header>
    <div class="annotated-section-content">
      <p>Body</p>
    </div>
  </section>
</section>
~~~