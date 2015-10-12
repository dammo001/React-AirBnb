ApiUtil = { 
	fetchBenches: function(params){ 
		$.ajax({
			url: "/api/benches",
			type: "GET",
			data: params,
			success: function(benches) {
				console.log(params);
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
				console.log(bench);
				ApiActions.createBench(bench);
			}
		});
	}
};