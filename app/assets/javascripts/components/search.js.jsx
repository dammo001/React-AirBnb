Search = React.createClass({ 
	getInitialState: function(){ 
		return ({west: FilterStore.filter.west,
				east: FilterStore.filter.east,
				north: FilterStore.filter.north, 
				south: FilterStore.filter.south, 
				minSeat: FilterStore.filter.minSeat,
				maxSeat: FilterStore.filter.maxSeat,
			});
	},

	componentDidMount: function(){
		FilterStore.addChangeListener(this.updateMap);
	},



	updateMap: function(){
		this.setState( FilterStore.all() )
		ApiUtil.fetchBenches(this.state);
	
	},

	handleMapClick: function(coords){
		coords = coords.latLng;
		this.props.history.pushState(null, "benches/new", coords);


	},

	render: function(){ 
		return (
			<div>
				<BnbMap handleMapClick={this.handleMapClick}/>
				<BenchIndex/>
				<FilterParams/>	
			</div>
		);
	}

})