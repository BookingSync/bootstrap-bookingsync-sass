module Bootstrap
  module BookingSync
    module Rails
      class Engine < ::Rails::Engine
        require 'bootstrap-sass'

        initializer 'bootstrap-bookingsync-sass.assets.precompile' do |app|
          %w(stylesheets javascripts fonts images).each do |sub|
            app.config.assets.paths << root.join('assets', sub).to_s
          end
          %w(eot svg ttf woff2).each do |format|
            app.config.assets.precompile << "bookingsync/bookingsync-smiles.#{format}"
            app.config.assets.precompile << "bookingsync/bookingsync-icons.#{format}"
          end
        end
      end
    end
  end
end
