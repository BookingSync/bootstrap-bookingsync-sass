lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'bootstrap/bookingsync/version'

Gem::Specification.new do |s|
  s.name     = "bootstrap-bookingsync-sass"
  s.version  = Bootstrap::BookingSync::VERSION
  s.authors  = ["Sebastien Grosjean"]
  s.email    = ["dev@bookingsync.com"]
  s.summary  = "Twitter's Bootstrap with BookingSync Theme, ready to drop into Rails"
  s.homepage = "https://github.com/BookingSync/bootstrap-bookingsync-sass"
  s.license  = 'MIT'

  s.add_runtime_dependency 'bootstrap-sass', '>= 3.3.5'

  s.files    = `git ls-files`.split("\n")
end
