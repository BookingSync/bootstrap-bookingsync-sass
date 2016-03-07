## Menu

### Basic example

<div class="example">
  <nav class="menu flex-col">
    <header class="dropdown">
      <div class="bar">
        <img src="http://placehold.it/24x24" class="img-responsive img-circle brand" alt="Fullname">
        <p>
          Surf Office: Lisbon<br>
          <small>
            <a data-target="#menu-header-submenu" href="#" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false" id="menu-switch-account">Switch account
              <span class="caret"></span></a>
          </small>
         </p>
      </div>
      <div id="menu-header-submenu" class="menu-dropdown" aria-labelledby="menu-switch-account">
        <ol>
          <li role="presentation">
            <a href="#">SurfOffice: Grand Canaria</a>
          </li>
          <li role="presentation" class="active">
            <a href="#">SurfOffice: Santa Cruz</a>
          </li>
        </ol>
      </div>
    </header>
    <div class="body flex-1">
      <ol>
        <li role="presentation" class="active">
          <a href="#"><i class="fa fa-calendar fa-fw"></i> <span>Bookings</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-users fa-fw"></i> <span>Clients</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-envelope-o fa-fw"></i> <span>Inquiries</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-home fa-fw"></i> <span>Rentals</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-star fa-fw"></i> <span>Reviews</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-globe fa-fw"></i> <span>Website</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-cubes fa-fw"></i> <span>Apps</span></a>
        </li>
      </ol>
    </div>
    <footer>
      <div class="bar">
        <img src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-06-11/6253926944_bd7ce3198dba69ac91be_24.jpg" class="img-responsive img-circle avatar" alt="Peter Fabor">
        <p>
          Peter Fabor<br>
          <small>
            <a data-target="#menu-footer-submenu" href="#" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false" id="menu-manage-account">Manage Account
              <i class="fa fa-gear"></i></a>
          </small>
        </p>
      </div>
      <div id="menu-footer-submenu" class="menu-dropright flex-col" aria-labelledby="menu-manage-account">
        <ol class="flex-1">
          <li class="back text-center" role="presentation">
            <a data-target="#menu-footer-submenu" href="#" data-toggle="dropdown">
              <i class="fa fa-long-arrow-left fa-fw"></i> <span class="sr-only">Back</span></a>
          </li>
          <li role="presentation">
            <a href="#"><i class="fa fa-user fa-fw"></i> <span>Personal Information</span></a>
          </li>
          <li role="presentation">
            <a href="#"><i class="fa fa-calendar-o fa-fw"></i> <span>Calendar Preferences</span></a>
          </li>
          <li role="presentation">
            <a href="#"><i class="fa fa-clock-o fa-fw"></i> <span>Time Format</span></a>
          </li>
        </ol>
      </div>
    </footer>
  </nav>
</div>

~~~ html
<nav class="menu flex-col">
  <header class="dropdown">
    <div class="bar">
      <img src="http://placehold.it/24x24" class="img-responsive img-circle brand" alt="Fullname">
      <p>
        Surf Office: Lisbon<br>
        <small>
          <a data-target="#menu-header-submenu" href="#" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false" id="menu-switch-account">Switch account
            <span class="caret"></span></a>
        </small>
       </p>
    </div>
    <div id="menu-header-submenu" class="menu-dropdown" aria-labelledby="menu-switch-account">
      <ol>
        <li role="presentation">
          <a href="#">SurfOffice: Lisbon
            <span class="label label-transparent pull-right">current</span>
          </a>
        </li>
        <li role="presentation">
          <a href="#">SurfOffice: Grand Canaria</a>
        </li>
        <li role="presentation" class="active">
          <a href="#">SurfOffice: Santa Cruz</a>
        </li>
      </ol>
    </div>
  </header>
  <div class="body flex-1">
    <ol>
      <li role="presentation" class="active">
        <a href="#"><i class="fa fa-calendar fa-fw"></i> <span>Bookings</span></a>
      </li>
      <li role="presentation">
        <a href="#"><i class="fa fa-users fa-fw"></i> <span>Clients</span></a>
      </li>
      <li role="presentation">
        <a href="#"><i class="fa fa-envelope-o fa-fw"></i> <span>Inquiries</span></a>
      </li>
      <li role="presentation">
        <a href="#"><i class="fa fa-home fa-fw"></i> <span>Rentals</span></a>
      </li>
      <li role="presentation">
        <a href="#"><i class="fa fa-star fa-fw"></i> <span>Reviews</span></a>
      </li>
      <li role="presentation">
        <a href="#"><i class="fa fa-globe fa-fw"></i> <span>Website</span></a>
      </li>
      <li role="presentation">
        <a href="#"><i class="fa fa-cubes fa-fw"></i> <span>Apps</span></a>
      </li>
    </ol>
  </div>
  <footer>
    <div class="bar">
      <img src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-06-11/6253926944_bd7ce3198dba69ac91be_24.jpg" class="img-responsive img-circle avatar" alt="Peter Fabor">
      <p>
        Peter Fabor<br>
        <small>
          <a data-target="#menu-footer-submenu" href="#" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false" id="menu-manage-account">Manage Account
            <i class="fa fa-gear"></i></a>
        </small>
      </p>
    </div>
    <div id="menu-footer-submenu" class="menu-dropright flex-col" aria-labelledby="menu-manage-account">
      <ol class="flex-1">
        <li role="presentation">
          <a data-target="#menu-footer-submenu" href="#" data-toggle="dropdown">
            <i class="fa fa-long-arrow-left fa-fw"></i> <span>Back</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-user fa-fw"></i> <span>Personal Information</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-calendar-o fa-fw"></i> <span>Calendar Preferences</span></a>
        </li>
        <li role="presentation">
          <a href="#"><i class="fa fa-clock-o fa-fw"></i> <span>Time Format</span></a>
        </li>
      </ol>
    </div>
  </footer>
</nav>
~~~

### Full height fixed position menu

Add `.menu-fixed` class to make the menu fixed to the left viewport edge.

~~~ html
<nav class="menu menu-fixed flex-col">
  ...
</nav>
~~~
