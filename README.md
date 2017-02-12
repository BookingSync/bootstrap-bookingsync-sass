# Bootstrap BookingSync SASS

`bootstrap-bookingsync-sass` is a Sass-powered version of [Bootstrap](http://github.com/twbs/bootstrap) with [BookingSync theme](http://styleguide.bookingsync.com), ready to drop right into your Sass powered applications.

Support for:

* [Rails Applications](#rails-applications)
* [Ember Applications](#ember-applications)

## Rails Applications

### Installation

`bootstrap-bookingsync-sass` is easy to drop into Rails with the asset pipeline.

In your Gemfile you need to add the `bootstrap-bookingsync-sass` gem.

```ruby
gem 'bootstrap-bookingsync-sass'
```

`bundle install` and restart your server to make the files available through the pipeline.

#### Stylesheets

Import Bootstrap styles in `app/assets/stylesheets/application.scss`:

```scss
// "bootstrap-bookingsync-sprockets" must be imported before "bootstrap-bookingsync" and "bootstrap-bookingsync/variables"
@import "bootstrap-bookingsync-sprockets";
@import "bootstrap-bookingsync";
```

`bootstrap-bookingsync-sprockets` must be imported before `bootstrap-bookingsync` for the icon fonts to work.

Make sure the file has `.scss` extension (or `.sass` for Sass syntax). If you have just generated a new Rails app,
it may come with a `.css` file instead. If this file exists, it will be served instead of Sass, so rename it:

```console
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
```

Then, remove all the `*= require_self` and `*= require_tree .` statements from the sass file. Instead, use `@import` to import Sass files.

Do not use `*= require` in Sass or your other stylesheets will not be [able to access][antirequire] the Bootstrap BookingSync mixins or variables.

#### Javascripts

Require Bootstrap BookingSync Javascripts in `app/assets/javascripts/application.js`:

```js
//= require jquery
//= require bootstrap-bookingsync-sprockets
```

`bootstrap-bookingsync-sprockets` loads all individual Bootstrap BookingSync Javascript files:

* `form.js`
* `switch.js`
* `stackable.js`

You can load each file individually using `bookingsync/stackable` for example.

`bootstrap-bookingsync-sprockets` won't load any Boostrap javascripts, you have to load them manually if you need them.


### Using SimpleForm?

The following initializer will make your inputs formatted to work best to Boostrap BookingSync Forms.
Note that you need [SimpleForm](https://github.com/plataformatec/simple_form) 3.1+.

To use it, create a `config/initializers/simple_form_bootstrap_bookingsync.rb` file with the following content:

```ruby
#
# Copyright 2015 BookingSync SAS.
# Licensed under MIT (https://github.com/BookingSync/bootstrap-bookingsync-sass/blob/master/LICENSE)
#

# Use this setup block to configure all options available in SimpleForm.
SimpleForm.setup do |config|
  config.wrappers :bs, tag: 'div', error_class: 'has-error' do |b|
    b.wrapper tag: 'div', class: 'form-group' do |ba|
      ba.use :html5
      ba.use :label
      ba.use :input, class: 'form-control'
    end
    b.use :error, wrap_with: { tag: 'span', class: 'error-message' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  config.wrappers :bs_addon, tag: 'div', class: "form-group", error_class: 'error' do |b|
    b.use :html5
    b.wrapper tag: 'div', class: 'input-group' do |addon|
      addon.use :prepend_addon
      addon.use :label
      addon.use :input, class: 'form-control'
      addon.use :append_addon
    end
    b.use :hint,  wrap_with: { tag: 'span', class: 'help-block' }
    b.use :error, wrap_with: { tag: 'span', class: 'help-inline' }
  end

  config.wrappers :bs_checkbox, tag: 'div', error_class: 'has-error' do |b|
    b.wrapper tag: 'div', class: 'checkbox' do |ba|
      ba.use :html5
      ba.use :label_input
    end
    b.use :error, wrap_with: { tag: 'span', class: 'help-inline' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  # Wrappers for forms and inputs using the Twitter Bootstrap toolkit.
  # Check the Bootstrap docs (http://twitter.github.com/bootstrap)
  # to learn about the different styles for forms and inputs,
  # buttons and other elements.
  config.default_wrapper = :bs
end

module SimpleForm
  module Components
    module Addons
      def prepend_addon(wrapper_options = nil)
        return input_group_addon(options[:prepend_addon]) unless options[:prepend_addon].nil?
      end

      def append_addon(wrapper_options = nil)
        return input_group_addon(options[:append_addon]) unless options[:append_addon].nil?
      end

      def input_group_addon(content)
        template.content_tag(:span, content, class: 'input-group-addon')
      end
    end
  end
end

SimpleForm::Inputs::Base.send(:include, SimpleForm::Components::Addons)
```

#### Usage

```ruby
<%= f.input :title %>
<%= f.input :accept_terms, wrapper: :bs_checkbox %>
<%= f.input :twitter, wrapper: :bs_addon, prepend_addon: '@' %>
<%= f.input :pecentage, wrapper: :bs_addon, append_addon: '%' %>
<%= f.input :money, wrapper: :bs_addon, prepend_addon: '$', append_addon: 'USD' %>
```

## Ember Applications

### Installation

#### When this Addon will be released

``` sh
ember install ember-cli-bootstrap-bookingsync-sass
```

#### While in development

Clone the styleguide repo and expose it to your local NPM packages

``` sh
git clone https://github.com/BookingSync/bootstrap-bookingsync-sass
cd bootstrap-bookingsync-sass
npm link
```

From your Ember App:

1) Install the package from your local NPM packages.

``` sh
npm link ember-cli-bootstrap-bookingsync-sass
```

2) Edit `package.js` and add `"ember-cli-bootstrap-bookingsync-sass": "*",` in your `devDependencies"`.

3) Run the blueprints manually as not done automatically in development mode.

``` sh
ember g ember-cli-bootstrap-bookingsync-sass
```

#### All the time

Add in your `ember-cli-build.js`

``` js
  var app = new EmberApp(defaults, {
    'ember-cli-bootstrap-sassy': {
      'js': false,
      'glyphicons': false
    }
  });
```

Ember CLI Bootstrap BookingSync SASS uses fonts from Google Fonts, so the URL to them has to be white listed. You can set this by adding to the Content Security Policy defined in config/environment.js like so:

```js
ENV.contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-inline'",
  'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
  'font-src': "'self' fonts.gstatic.com",
  'connect-src': "'self'",
  'img-src': "'self' data:",
  'media-src': "'self'"
}
```

You can find out more information on the CSP addon page [here](https://github.com/rwjblue/ember-cli-content-security-policy#ember-cli-content-security-policy).

#### Stylesheets

The blueprints should generate this setup for you on install but if needed you can manually install Bootstrap BookingSync styles in `app/styles/app.scss` using:

```scss
@import "ember-modal-dialog/ember-modal-structure";
@import "bootstrap-bookingsync";
@import "ember-power-select";
@import "ember-power-calendar";
```

Make sure the file has `.scss` extension (or `.sass` for Sass syntax). If you have just generated a new Ember app, it may come with a `.css` file instead.

### Running

* `ember server`
* Visit your app at http://localhost:4200 or from your Rails application if tight together.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

### Deploying Ember documentation to global styleguide documentation

* `ember deploy production`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
