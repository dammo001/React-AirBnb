ApiUtil = { 
	fetchBenches: function(params){ 
		$.ajax({
			url: "/api/benches",
			type: "GET",
			data: {bounds: params},
			success: function(benches) {
				ApiActions.receiveBenches(benches);
			}
		});
	},

	createBench: function(params){ 
		$.ajax({
			url: "/api/benches",
			type: "POST",
			data: params,
			success: function(bench){
				ApiActions.createBench(bench);
			}
		});
	}
};