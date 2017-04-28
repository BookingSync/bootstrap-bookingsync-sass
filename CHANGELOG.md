### master

### 1.0.3 - 2017-04-28

* bug fixes
  * remove fonts from broccoli pipeline
  
### 1.0.2 - 2017-04-14

* bug fixes
 * Ember Add-on: add 'filled' class-name to input, textarea with value.
 * `form.js` to use more correct `DOMContentLoaded` event instead of `ready`.
 
* improvements
  * fix power select shifting the bottom content on focus.
  * add icons `icon-trash` and `icon-clone`
  * embed icons and smiles fonts within CSS

### 1.0.1 - 2017-02-12

* bug fixes
  * fix menu and navigation on tablet (768px width) devices.
  * fix menu z-index.
  * fix tabs styling when active tab is also focused.
  
* improvements
  * add `.text-nowrap` util class

### 1.0.0 - 2016-12-25

* improvements
  * update layout when using top level container and footer.

### 1.0.0.beta12 - 2016-12-24

* improvements
  * add `nav-pills` with improved design when first element of a `sheet`.
  * update Ember `bsy-modal` to automatically handle `body` class assignment.
  * add Ember `bsy-nav` component.

### 1.0.0.beta11 - 2016-09-03

* improvements
  * add support for `.alert-container` and `.alert-container-top` used for flash messages.

* bug fixes
  * fix `.alert` colors and style

### 1.0.0.beta10 - 2016-08-23

* breaking changes
  * move brand and gray colors to `_colors.scss`

### 1.0.0.beta9 - 2016-08-22

* bug fixes
  * fix `.main-content` height
  * fix buttons margin when outside of forms

### 1.0.0.beta8 - 2016-08-22

* breaking changes
  * use `menu-link` structure in header and footer submenus.

* improvements
  * add support for `menu-app`

### 1.0.0.beta7 - 2016-08-22

* breaking changes
  * require selects to have a `from-group` div

* bug fixes
  * fix `select` and `chosen` styles
  * fix `forms` initialization

* improvements
  * add support for: frameless annotated section content

### 1.0.0.beta6 - 2016-08-20

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
