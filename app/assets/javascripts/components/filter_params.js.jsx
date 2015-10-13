FilterParams = React.createClass({ 
	getInitialState: function(){ 
		return ({
			minSeat: 0,
			maxSeat: 10
		});
	},


	changeMin: function(event){
		this.setState({minSeat: event.target.value});
		FilterActions.updateSeats({minSeat: event.target.value, maxSeat: this.state.maxSeat});
	},

	// componentDidUpdate: function(){
	// 	FilterActions.updateSeats(this.state);
	// },

	changeMax: function(event){
		this.setState({maxSeat: event.target.value});
		FilterActions.updateSeats({maxSeat: event.target.value, minSeat: this.state.minSeat});
	},

	render: function(){ 
		var min = this.state.minSeat;
		var max = this.state.maxSeat;
		return ( 
			<div> 
				<input type="number" placeholder="Minimum seats" value={min} onChange={this.changeMin} ></input>
				<input type="number" placeholder="Maximum seats" value={max} onChange={this.changeMax} ></input> 
			</div>
			);
	}


})