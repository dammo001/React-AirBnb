ApiActions = { 
	receiveBenches: function(benches){
		AppDispatcher.dispatch({ 
			actionType: BenchConstants.BENCHES_RECEIVED,
			benches: benches 
		});
	},

	createBench: function(bench){
		AppDispatcher.dispatch({
			actionType: BenchConstants.BENCH_CREATED,
			bench: bench
		});
	}	

};