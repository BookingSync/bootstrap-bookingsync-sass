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
~~~