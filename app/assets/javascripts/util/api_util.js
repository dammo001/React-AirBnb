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
	}
};