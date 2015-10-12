Search = React.createClass({ 

	handleMapClick: function(coords){
		coords = coords.latLng;
		this.props.history.pushState(null, "benches/new", coords)


	},

	render: function(){ 
		return (
			<div>
				<BnbMap handleMapClick={this.handleMapClick}/>
				<BenchIndex/>	
			</div>
		);
	}

})