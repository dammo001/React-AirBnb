class Bench < ActiveRecord::Base

	def self.in_bounds(bounds)	
		if bounds[:minSeat].nil? 
			bounds[:minSeat] = 0
		elsif bounds[:maxSeat].nil?
			bounds[:maxSeat] = 10
		end
		
		benches = Bench.where(lat: (bounds[:south] .. bounds[:north]), lng: (bounds[:west] .. bounds[:east]), seating: (bounds[:minSeat] ... bounds[:maxSeat]))
		return benches
	end



end





