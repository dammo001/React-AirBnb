FilterActions = { 
	updateBounds: function(params){ 
		AppDispatcher.dispatch({
			actionType: BenchConstants.UPDATE_BOUNDS,
			params: params
		});
	},

	filterBenches: function(params){
		
		AppDispatcher.dispatch({
			actionType: BenchConstants.FILTER_BENCHES,
			params: params
		});
	},


	updateSeats: function(params){
		AppDispatcher.dispatch({
			actionType: BenchConstants.UPDATE_SEATS,
			params: params
		});
	}

};