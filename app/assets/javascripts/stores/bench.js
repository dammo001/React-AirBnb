(function(root){ 
	'use_strict'; 

	var _benches = []; 

	var CHANGE = "CHANGE"

	var setBenches = function(benches){
		_benches = benches;
	};



	root.BenchStore = $.extend({}, EventEmitter.prototype, { 
		all: function(){ 
			return _benches.slice(); 
		},


		//callback is NOT invoked at the listener level, or it would return the value 
		addChangeListener: function(callback){ 
			this.on(CHANGE, callback);
		},

		removeChangeListener: function(callback){
			this.removeListener(CHANGE, callback);
		},

		change: function(message){
			this.emit(message);
		},
//AppDispatcher is run as a side effect of defining dispatcherID rather than run on its own 
	 	dispatcherID:
	 		AppDispatcher.register(function(payload) {
	 			switch(payload.actionType){
	 				case BenchConstants.BENCHES_RECEIVED:
	 					setBenches(payload.benches);
	 					BenchStore.change(CHANGE);
	 					break;

	 				case BenchConstants.BENCH_CREATED:
	 					BenchStore.change(CHANGE);
	 					break;	
	 			}
	 		})
	 });


})(this);