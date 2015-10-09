BnbMap = React.createClass({ 

	getInitialState: function(){ 
		return {
			benches: []
		};
	},

	getBenches: function(){ 
		this.setState( {benches: BenchStore.all() });
		this.makeMarker();
	},

	makeMarker: function(benches){
		var that = this; 
		if (this.state.benches.length === 0){
			return;
		} else { 
		this.state.benches.forEach(function(bench){
			console.log(bench.lat);
			console.log(map);
			new google.maps.Marker({
				position: {lat: bench.lat, lng: bench.lng},
				map: that.map
			});
		});
		}
	},

	componentDidMount: function(){
		var map = React.findDOMNode(this.refs.map);

		BenchStore.addChangeListener(this.getBenches);
		
		var mapOptions = {
			center: {lat: 37.7758, lng: -122.435},
			zoom: 13
		};

		this.map = new google.maps.Map(map, mapOptions);
	},


	render: function() {
		return ( 
			<div className="map" id="map" ref="map"> MAP STUFF</div>  
		)
	}
})




