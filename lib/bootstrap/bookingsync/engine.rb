module Bootstrap
  module BookingSync
    module Rails
      class Engine < ::Rails::Engine
        require 'bootstrap-sass'

        initializer 'bootstrap-bookingsync-sass.assets.precompile' do |app|
          %w(stylesheets javascripts fonts images).each do |sub|
            app.config.assets.paths << root.join('assets', sub).to_s
          end

          extensions = ["*.svg", "*.eot", "*.woff2", "*.ttf"]
          bookingsync_smiles = extensions.map { |e| "bookingsync/bookingsync-smiles/#{e}" }
          bookingsync_icons = extensions.map { |e| "bookingsync/bookingsync-icons/#{e}" }
          config.assets.precompile << bookingsync_smiles
          config.assets.precompile << bookingsync_icons
        end
      end
    end
  end
end
