<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="core-admin">Core Admin</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop"
       data-example-id="core-admin">
    <iframe class="bs-example-iframe" src="/embed/core_admin/index.html"
            frameborder="0"></iframe>
  </div>
</div>
~~~ html
<nav id="sidebar" class="menu menu-fixed flex-col">
  ...
</nav>
<nav id="sidebar-settings" class="menu menu-fixed flex-col menu-submenu menu-submenu-collapsed">
  ...
</nav>
<div class="sided-content">
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle menu-toggle" data-toggle="toggle"
                data-target="body" data-value="menu-open">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <button type="button" class="navbar-toggle navbar-toggle-context"
                data-toggle="collapse" data-target=".navbar-top-collapse">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand-container">
          <span class="navbar-brand">
            <h1 class="text-overflow"><i class="icon-rental"></i> Rentals</h1>
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
~~~

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="app-admin">App admin</h3>
  </div>

  <div class="bs-callout bs-callout-info">
    <h4>Information</h4>
    <p>
      On mobile devices, the parent iframe overlay a toggle button over the iframe to toggle the parent frame menu.
    </p>
    <p>
      This can be replaced by your own toggle button as presented in the <a href="/compositions/#app-admin-with-menu">App admin with menu</a> example.
    </p>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="app-admin">
    <iframe class="bs-example-iframe" src="/embed/app_admin/index.html"
            frameborder="0"></iframe>
  </div>
</div>
~~~ html
<div class="menu-toggle-hideable">
  <button type="button" class="navbar-toggle menu-toggle" data-toggle="toggle"
          data-target="body" data-value="menu-open">
    <span class="sr-only">Toggle Navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
</div>
<nav id="sidebar" class="menu menu-fixed flex-col menu-folded">
  ...
</nav>
<nav id="sidebar-settings" class="menu menu-fixed flex-col menu-submenu menu-submenu-collapsed">
  ...
</nav>
<div class="sided-content-full">
  <iframe class="iframe-fullscreen"
          src="/embed/app_admin__content/index.html"
          frameborder="0"></iframe>
</div>

<!-- iFrame content -->
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  ...
</nav>
<section class="main-content">
  <div class="sheet">
    <p>Body</p>
  </div>
</section>
~~~

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="app-admin-with-menu">App admin with menu</h3>
  </div>

  <div class="bs-callout bs-callout-info">
    <h4>Information</h4>
    <p>
      On mobile devices, the parent iframe overlay a toggle button over the iframe to toggle the parent frame menu.
    </p>
    <p>
      Using the <code>menu</code> plugin, your iframe is able to connect its own menu with the parent's frame one. You simply need to add the class <code>menu-toggle-parent-frame</code> to your toggle button, which will also remove the parent frame toggle button that was initialy present as long as it's having the class <code>menu-toggle-hideable</code>.
    </p>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="app-admin-with-menu">
    <iframe class="bs-example-iframe" src="/embed/app_admin_with_menu/index.html"
            frameborder="0"></iframe>
  </div>
</div>
~~~ html
<div class="menu-toggle-hideable">
  <button type="button" class="navbar-toggle menu-toggle" data-toggle="toggle"
          data-target="body" data-value="menu-open">
    <span class="sr-only">Toggle Navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
</div>
<nav id="sidebar" class="menu menu-fixed flex-col menu-folded">
  ...
</nav>
<nav id="sidebar-settings" class="menu menu-fixed flex-col menu-submenu menu-submenu-collapsed">
  ...
</nav>
<div class="sided-content-full">
  <iframe class="iframe-fullscreen"
          src="/embed/app_admin_with_menu__content/index.html"
          frameborder="0"></iframe>
</div>

<!-- iFrame content -->
<nav class="menu menu-fixed flex-col menu-submenu menu-app">
  ...
</nav>
<div class="sided-content-with-menu">
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button"
                class="navbar-toggle menu-toggle menu-toggle-parent-frame"
                data-toggle="toggle"
                data-target="body" data-value="menu-open">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <button type="button" class="navbar-toggle navbar-toggle-context"
                data-toggle="collapse" data-target=".navbar-top-collapse">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand-container">
          <span class="navbar-brand">
            <h1 class="text-overflow"><i class="icon-rental"></i> Rentals</h1>
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
      <p>...</p>
    </div>
  </section>
</div>
~~~

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="section">Section</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="section">
    <iframe class="bs-example-iframe" src="/embed/section/index.html"
            frameborder="0"></iframe>
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
          <h1 class="text-overflow"><i class="icon-rental"></i> Rentals</h1>
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

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="nested-section">Nested Section</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="nested-section">
    <iframe class="bs-example-iframe" src="/embed/nested_section/index.html"
            frameborder="0"></iframe>
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
          <h1 class="text-overflow">
            <i class="icon-calendar"></i>
            <span class="navbar-breadcrumb hidden-xs">
              <a href="#">Bookings</a>
              /
            </span>
            A very long section name
          </h1>
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

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="section-with-flash">Section with flash</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="section-with-flash">
    <iframe class="bs-example-iframe" src="/embed/section_with_flash/index.html"
            frameborder="0"></iframe>
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
          <h1 class="text-overflow"><i class="icon-rental"></i> Rentals</h1>
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
  <div class="alert-container alert-container-top">
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
  </div>
  <div class="sheet">
    <p>Body</p>
  </div>
</section>
~~~

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="two-columns">Two columns</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="two-columns">
    <iframe class="bs-example-iframe" src="/embed/two_columns/index.html"
            frameborder="0"></iframe>
  </div>
</div>

<div class="example">
  <div class="sheet-header">
    <h3 id="tabulated-content">Tabulated content</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="tabulated-content">
    <iframe class="bs-example-iframe" src="/embed/tabulated_content/index.html"
            frameborder="0"></iframe>
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

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="annotated-section">Annotated section</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="annotated-section">
    <iframe class="bs-example-iframe" src="/embed/annotated_section/index.html"
            frameborder="0"></iframe>
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

<div class="example">
  <div class="sheet-header">
    <h3 id="annotated-section-with-tabulated-content">
      Annotated section with tabulated content
    </h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="annotated-section-with-tabulated-content">
    <iframe class="bs-example-iframe"
            src="/embed/annotated_section_with_tabulated_content/index.html"
            frameborder="0"></iframe>
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
        <p>Body</p>
      </div>
    </div>
  </section>
</section>
~~~

<div class="example example-responsive">
  <div class="sheet-header">
    <h3 id="annotated-section-with-frameless-content">Annotated section with frameless content</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop" 
       data-example-id="annotated-section-with-frameless-content">
    <iframe class="bs-example-iframe" src="/embed/annotated_section_with_frameless_content/index.html"
            frameborder="0"></iframe>
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
    <div class="annotated-section-content annotated-section-content-frameless">
      <div class="panel panel-default">
        <div class="panel-body">
          <p>Panel 1</p>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-body">
          <p>Panel 2</p>
        </div>
      </div>
    </div>
  </section>
</section>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="fullscreen-modal">Fullscreen modal</h3>
  </div>

  <div class="bs-example bs-sheet bs-example-composition-body bs-example-iframe-container-desktop"
       data-example-id="fullscreen-modal">
    <iframe class="bs-example-iframe" src="/embed/fullscreen_modal/index.html"
            frameborder="0"></iframe>
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
