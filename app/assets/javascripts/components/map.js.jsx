BnbMap = React.createClass({ 

	getInitialState: function(){ 
		return {
			benches: [],
			markers: []
		};
	},

	getBenches: function(){ 
		this.clearMarker(); 
		this.setState( {benches: BenchStore.all() });
		this.makeMarker();
	},


	clearMarker: function() { 
		this.state.markers.forEach(function(marker){ 
			marker.setMap(null);});
		this.setState({markers: []});
	},

	makeMarker: function(benches){
		var that = this; 
		if (this.state.benches.length === 0){
			return;
		} else { 
		var marks = [];
		this.state.benches.forEach(function(bench){
			marks.push(new google.maps.Marker({
				position: {lat: bench.lat, lng: bench.lng},
				map: that.map
			}));
		});
			this.setState({markers: marks});
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
		this.map.addListener('idle', function(){ 
			var pos = this.map.getBounds();
			var north = pos.Pa.j
			var east = pos.La.I
			var south = pos.Pa.I
			var west = pos.La.j
			var params = {bounds: {north: north, east: east, west: west, south: south}};


			FilterActions.updateBounds(params);
	
		}.bind(this));

		this.map.addListener('click', this.props.handleMapClick)



	},


	render: function() {
		return ( 
			<div className="map" id="map" ref="map"> </div>  
		)
	}
})






