BenchIndex = React.createClass({

	getInitialState: function(){
		return {
			benches: BenchStore.all()
		};
	},

	componentDidMount: function(){ 
		this.storeChanged();
	},

	storeChanged: function(){ 
		BenchStore.addChangeListener(this.setBenches);
	},

	setBenches: function(){
		this.setState({ benches: BenchStore.all()});
	},

	render: function() { 
		return (
			<div> {
				this.state.benches.map(function(bench){ 
				return (
					<div>
					{bench.description}
					</div>
				 )})}
			</div> 
		)
	} 
});