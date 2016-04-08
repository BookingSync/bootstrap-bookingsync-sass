### Unreleased

### 0.0.17 - 2016-04-08

* improvement
  * add documentation
  * move the menu and sheet components into separate files
  * move flex helpers into utilities file
  * move all variable declarations into one file
  * add !default to all variable declarations
  * add !important rule to make the vertical align helpers usable in table cell
  * provide the fixed position menu as a component variant

### 0.0.16 - 2015-12-14

* improvement
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
