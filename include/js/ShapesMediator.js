/* Using Mediator Pattern */

var ShapesMediator = {

	_shapes: {},


	// Returns shape if it exists
	getShape: function(type){
		if(this._shapes[type]){
			return this._shapes[type];
		}
	},

	// Add available shapes on app initialization
	addShape: function(name, constructor){
		if(!name || !constructor){
			logger.show('log', '[addShape] - Give me both the Name and Constructor please!')
		}
		else{
			if(!this._shapes[name]){
				this._shapes[name] = constructor;
			}
		}
	}

}