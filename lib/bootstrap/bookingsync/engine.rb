module Bootstrap
  module BookingSync
    module Rails
      class Engine < ::Rails::Engine
        require 'bootstrap-sass'

        initializer 'bootstrap-bookingsync-sass.assets.precompile' do |app|
          %w(stylesheets javascripts fonts images).each do |sub|
            app.config.assets.paths << root.join('assets', sub).to_s
          end
          app.config.assets.precompile << %r(bookingsync/bookingsync-smiles\.(?:eot|svg|ttf|woff2?)$)
          app.config.assets.precompile << %r(bookingsync/bookingsync-icons\.(?:eot|svg|ttf|woff2?)$)
        end
      end
    end
  end
end
