<div class="example">
  <div class="sheet-header">
    <h3 id="list-group">List group</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="list-group">
    <div class="panel panel-default">
      <ul class="list-group list-unstyled">
        <li class="active">
          <a href="#" class="list-group-item">Vacation Rentals</a>
        </li>
        <li>
          <a href="#" class="list-group-item">City Apartments</a>
        </li>
      </ul>
    </div>
  </div>
</div>
~~~ html
<div class="panel panel-default">
  <ul class="list-group list-unstyled">
    <li class="active">
      <a href="#" class="list-group-item">Vacation Rentals</a>
    </li>
    <li>
      <a href="#" class="list-group-item">City Apartments</a>
    </li>
  </ul>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="list-group-with-icons">List group with icons</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="list-group-with-icons">
    <div class="panel panel-default">
      <ul class="list-group list-unstyled">
        <li class="active">
          <a href="#" class="list-group-item">
            <i class="icon-reservation icon-fw"></i>
            &nbsp; Reservations
          </a>
        </li>
        <li>
          <a href="#" class="list-group-item">
            <i class="icon-clients icon-fw"></i>
            &nbsp; Clients
          </a>
        </li>
        <li>
          <a href="#" class="list-group-item">
            <i class="icon-rental icon-fw"></i>
            &nbsp; Rentals
          </a>
        </li>
        <li>
          <a href="#" class="list-group-item">
            <i class="icon-reviews icon-fw"></i>
            &nbsp; Reviews
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
~~~ html
<div class="panel panel-default">
  <ul class="list-group list-unstyled">
    <li class="active">
      <a href="#" class="list-group-item">
        <i class="icon-reservation icon-fw"></i>
        &nbsp; Reservations
      </a>
    </li>
    <li>
      <a href="#" class="list-group-item">
        <i class="icon-clients icon-fw"></i>
        &nbsp; Clients
      </a>
    </li>
    <li>
      <a href="#" class="list-group-item">
        <i class="icon-rental icon-fw"></i>
        &nbsp; Rentals
      </a>
    </li>
    <li>
      <a href="#" class="list-group-item">
        <i class="icon-reviews icon-fw"></i>
        &nbsp; Reviews
      </a>
    </li>
  </ul>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="nested-list-group">Nested list group</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="nested-list-group">
    <div class="panel panel-default">
      <ul class="list-group list-unstyled">
        <li class="expanded active">
          <a href="#" class="list-group-item">Reservations</a>
          <ul class="list-group list-unstyled">
            <li>
              <a href="#" class="list-group-item">Planning</a>
            </li>
            <li>
              <a href="#" class="list-group-item">Calendrier</a>
            </li>
            <li>
              <a href="#" class="list-group-item">List</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="list-group-item">Clients</a>
        </li>
        <li>
          <a href="#" class="list-group-item">Rentals</a>
        </li>
        <li>
          <a href="#" class="list-group-item">Reviews</a>
        </li>
      </ul>
    </div>
  </div>
</div>
~~~ html
<div class="panel panel-default">
  <ul class="list-group list-unstyled">
    <li class="expanded active">
      <a href="#" class="list-group-item">Reservations</a>
      <ul class="list-group list-unstyled">
        <li>
          <a href="#" class="list-group-item">Planning</a>
        </li>
        <li>
          <a href="#" class="list-group-item">Calendrier</a>
        </li>
        <li>
          <a href="#" class="list-group-item">List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#" class="list-group-item">Clients</a>
    </li>
    <li>
      <a href="#" class="list-group-item">Rentals</a>
    </li>
    <li>
      <a href="#" class="list-group-item">Reviews</a>
    </li>
  </ul>
</div>
~~~

<div class="example">
  <div class="sheet-header">
    <h3 id="nested-list-group-with-icons">Nested list group with icons</h3>
  </div>
  <div class="bs-example bs-sheet" data-example-id="nested-list-group-with-icons">
    <div class="panel panel-default">
      <ul class="list-group list-group-with-icon list-unstyled">
        <li class="expanded">
          <a href="#" class="list-group-item">
            <i class="icon-reservation icon-fw"></i>
            &nbsp; Reservations
          </a>
          <ul class="list-group list-unstyled">
            <li><a href="#" class="list-group-item">Planning</a></li>
            <li class="active">
              <a href="#" class="list-group-item">Calendars</a>
            </li>
            <li><a href="#" class="list-group-item">List</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="list-group-item">
            <i class="icon-clients icon-fw"></i>
            &nbsp; Clients
          </a>
        </li>
        <li>
          <a href="#" class="list-group-item">
            <i class="icon-rental icon-fw"></i>
            &nbsp; Rentals
          </a>
        </li>
        <li>
          <a href="#" class="list-group-item">
            <i class="icon-reviews icon-fw"></i>
            &nbsp; Reviews
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
~~~ html
<div class="panel panel-default">
  <ul class="list-group list-group-with-icon list-unstyled">
    <li class="expanded">
      <a href="#" class="list-group-item">
        <i class="icon-reservation icon-fw"></i>
        &nbsp; Reservations
      </a>
      <ul class="list-group list-unstyled">
        <li><a href="#" class="list-group-item">Planning</a></li>
        <li class="active">
          <a href="#" class="list-group-item">Calendars</a>
        </li>
        <li><a href="#" class="list-group-item">List</a></li>
      </ul>
    </li>
    <li>
      <a href="#" class="list-group-item">
        <i class="icon-clients icon-fw"></i>
        &nbsp; Clients
      </a>
    </li>
    <li>
      <a href="#" class="list-group-item">
        <i class="icon-rental icon-fw"></i>
        &nbsp; Rentals
      </a>
    </li>
    <li>
      <a href="#" class="list-group-item">
        <i class="icon-reviews icon-fw"></i>
        &nbsp; Reviews
      </a>
    </li>
  </ul>
</div>
~~~
