# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


benches = Bench.create([{ description: "My bottom bench!", lat: 37.778611, lng: -122.423664, seating: 3}, { description: "App Academy's favorite bench", lat: 37.781023, lng: -122.411312, seating: 4}])