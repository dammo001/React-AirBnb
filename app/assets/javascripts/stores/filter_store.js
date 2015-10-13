(function(root){
	'use strict';

	var CHANGE = "CHANGE";

	root.FilterStore = $.extend({}, EventEmitter.prototype, { 

		filter: {west: 0,
				east: 0,
				north: 0, 
				south: 0, 
				minSeat: 0,
				maxSeat: 10},


		all: function() {
			return $.extend(true, {}, this.filter); 
		},

		addChangeListener: function(callback){ 
			this.on(CHANGE, callback);
		},

		removeChangeListener: function(callback){
			this.removeListener(CHANGE, callback);
		},

		change: function(message){
			this.emit(message);
		},
	

		dispatcherID: 
			AppDispatcher.register(function(payload) { 
				switch(payload.actionType){

					case BenchConstants.UPDATE_BOUNDS:
					FilterStore.filter.west = payload.params.bounds.west;
					FilterStore.filter.east = payload.params.bounds.east;
					FilterStore.filter.north = payload.params.bounds.north;
					FilterStore.filter.south = payload.params.bounds.south; 
					FilterStore.change(CHANGE);
					break; 

					case BenchConstants.UPDATE_SEATS:
					console.log(payload.params.minSeat);
					console.log(payload.params.maxSeat);
					FilterStore.filter.minSeat = parseInt(payload.params.minSeat);
					FilterStore.filter.maxSeat = parseInt(payload.params.maxSeat);
					FilterStore.change(CHANGE);
					break; 
				}

			})


	});







})(this);