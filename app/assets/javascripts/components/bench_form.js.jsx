BenchForm = React.createClass({ 
	createBench: function(event){
		debugger;
		var lat = event.target[0].value;
		var lng = event.target[1].value;
		var desc = event.target[2].value; 
		ApiUtil.createBench({bench: {lat: lat, lng: lng, description: desc}});
	},


	render: function(){ 
		return(
			<form onSubmit={this.createBench}>Create a new Bench!<br/>
				Latitude: <input type ="text" value={this.props.location.query.J} name="lat"></input><br/>
				Longitude: <input type = "text" value={this.props.location.query.M} name="lng"></input><br/>
				Description: <textarea name="description"></textarea><br/>
				<input type ="submit"></input>
			</form>
		)}


})