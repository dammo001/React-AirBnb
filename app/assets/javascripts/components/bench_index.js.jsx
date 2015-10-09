BenchIndex = React.createClass({

	getInitialState: function(){
		return {
			benches: BenchStore.all()
		};
	},

	componentDidMount: function(){ 
		ApiUtil.fetchBenches();
		this.storeChanged();
	},

	storeChanged: function(){ 
		BenchStore.addChangeListener(this.setBenches);
	},

	setBenches: function(){
		this.setState({ benches: BenchStore.all() });
	},

	render: function() { 
		return (
			<div> {this.state.benches}</div> 
		)
	} 
});