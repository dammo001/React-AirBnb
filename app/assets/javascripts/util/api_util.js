ApiUtil = { 
	fetchBenches: function(){ 
		$.ajax({
			url: "/api/benches",
			type: "GET",
			success: function(benches) {
				console.log(benches)
				ApiActions.receiveBenches(benches);
			}
		});
	}
};