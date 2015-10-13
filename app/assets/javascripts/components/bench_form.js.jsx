BenchForm = React.createClass({ 

	createBench: function(event){
		event.preventDefault();
		var lat = event.target[0].value;
		var lng = event.target[1].value;
		var desc = event.target[2].value; 
		var seating = event.target[3].value; 
		ApiUtil.createBench({bench: {lat: lat, lng: lng, description: desc, seating: seating }});
		this.props.history.pushState(null, "/") 
	},


	render: function(){ 
		return(
			<form onSubmit={this.createBench}>Create a new Bench!<br/>
				Latitude: <input type ="text" value={this.props.location.query.J} name="lat"></input><br/>
				Longitude: <input type = "text" value={this.props.location.query.M} name="lng"></input><br/>
				Description: <textarea name="description"></textarea><br/>
				Seating: 
				<select>
					<option value="1">1</option>
					<option	value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<input type ="submit"></input>
			</form>
		)}


})