class Bench < ActiveRecord::Base

	def self.in_bounds(bounds)	
		benches = Bench.where(lat: (bounds[:south] .. bounds[:north]), lng: (bounds[:west] .. bounds[:east]))
		return benches
	end

end





