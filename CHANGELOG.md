### master

* improvements
  * add icons: `translations`, `external`, `categories`, `navigation`, `amenities`, `template`.

### 1.0.0.beta5 - 2016-08-18

* bug fixes
  * fix bookingsync-icons precompilation

### 1.0.0.beta4 - 2016-08-18

* bug fixes
  * use `rgba(255, 255, 255, 0)` instead of `transparent` for easier compatibility.

### 1.0.0.beta3 - 2016-08-09

* bug fixes
  * Fix `menu-body` padding when directly succeeding a `menu-icon`
  * Fix menu for Apps and add `menu-folded`

* improvements
  * Add support to automatically mask menu toggle button from apps if
    connected with pushMessage `bookingsync:menu:toggle-button:hide`
  * Add support for annotated sections with tabulated content

### 1.0.0.beta2 - 2016-08-07

* improvements
  * Document more compositions examples
  * Add support to toggle `menu` from the child iframe

### 1.0.0.beta1 - 2016-08-06

* breaking changes
  * Smiles definition changed from `bs-icon bs-*` to `bs-icon-*`
  * Fix `laughing` smile name (was with a typo `laughting`)
  * Entire rebuild of the `menu`
  * remove `#content` in favor of `.main-content`

* bug fixes
  * Fix `navbar-btn` positioning
  * Fix fixed navbars with collapseable menus
  * Fix select labels, needs to wrap `select`s in a `div` with a `select` class.
  * Fix addon validation state background color

* improvements
  * Add Ember Addon: ember-cli-bootstrap-bookingsync-sass
  * Add `btn-secondary-inverse` and `btn-round`
  * Add `sheet-fullscreen`
  * Add documentation for tabulated content composition
  * Add documentation for fullscreen modal composition
  * Add documentation for radio buttons
  * Add documentation for modals
  * Add `annotated-section` support
  * Improve form inputs spacing
  * Add documentation for smiles
  * Add icons font and documentation
  * Add icons with fixed width
  * Add smiles with fixed width
  * Add styling for Ember Power Select
  * Improve Buttons styling
  * Add Buttons loading animation
  * Add `list-group` support with nesting and icons support 
  * Add `.sided-content` to use with `menu`
  * Add `.navbar-breadcrumb`

### 0.0.19 - 2016-05-09

* bug fixes
  * Fix `stackable` so items order can't be altered

* improvements
  * Update ReadMe to explain how to use single javascript plugins

### 0.0.18 - 2016-05-09

* improvements
  * add `tabs` with improved design when first element of a `sheet`
  * add `stackable.js`, used to auto-stack list or tabs to always fit on single lines
  * improve dropdown style through new `dropdown` stylesheet file
  * restructure docs examples

### 0.0.17 - 2016-04-08

* improvements
  * add documentation
  * move the menu and sheet components into separate files
  * move flex helpers into utilities file
  * move all variable declarations into one file
  * add !default to all variable declarations
  * add !important rule to make the vertical align helpers usable in table cell
  * provide the fixed position menu as a component variant

### 0.0.16 - 2015-12-14

* improvements
  * add styling for `descriptions`

### 0.0.15 - 2015-12-09

* bug fixes
  * fix scrolling and visibility issues in menu lists
  * resolve menu position and height issues on iOS

* backwards incompatible changes
  * Change prefix in vertical align helper classes. `.text-top`, `.text-middle`
    and `.text-bottom` are renamed to `.valign-top`, `.valign-middle`,
    `.valign-bottom`. The rules are moved from `_type.scss` to `_utilities.scss`
    partial and are included in main `_bootstrap-bookingsync.scss` stylesheet.
