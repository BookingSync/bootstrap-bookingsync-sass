require "bootstrap/bookingsync/version"

module Bootstrap
  module BookingSync
    class << self
      # Inspired by Kaminari
      def load!
        register_compass_extension if compass?

        if rails?
          register_rails_engine
        elsif sprockets?
          register_sprockets
        elsif defined?(::Sass) && ::Sass.respond_to?(:load_paths)
          # The deprecated `sass` gem:
          ::Sass.load_paths << stylesheets_path
        end

        if defined?(::Sass::Script::Value::Number)
          # Set precision to 6 as per:
          # https://github.com/twbs/bootstrap/blob/da717b03e6e72d7a61c007acb9223b9626ae5ee5/package.json#L28
          ::Sass::Script::Number.precision = [6, ::Sass::Script::Number.precision].max
        end
      end

      # Paths
      def gem_path
        @gem_path ||= File.expand_path '..', File.dirname(__FILE__)
      end

      def stylesheets_path
        File.join assets_path, 'stylesheets'
      end

      def fonts_path
        File.join assets_path, 'fonts'
      end

      def javascripts_path
        File.join assets_path, 'javascripts'
      end

      def assets_path
        @assets_path ||= File.join gem_path, 'assets'
      end

      # Environment detection helpers
      def sprockets?
        defined?(::Sprockets)
      end

      def compass?
        defined?(::Compass::Frameworks)
      end

      def rails?
        defined?(::Rails)
      end

      private

      def register_compass_extension
        ::Compass::Frameworks.register(
            'bootstrap-bookinsync',
            :version               => Bootstrap::BookingSync::VERSION,
            :path                  => gem_path,
            :stylesheets_directory => stylesheets_path,
            :templates_directory   => File.join(gem_path, 'templates')
        )
      end

      def register_rails_engine
        require 'bootstrap/bookingsync/engine'
      end

      def register_sprockets
        Sprockets.append_path(stylesheets_path)
        Sprockets.append_path(fonts_path)
        Sprockets.append_path(javascripts_path)
      end
    end
  end
end

Bootstrap::BookingSync.load!
