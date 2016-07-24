/* Using Singleton pattern to be sure that 
** there is only one instance of our Core
*/

var Core = (function(){

	// This is a factory class to determine shape type and 
	// create classes based on parameters
	var ShapeFactory = function() {

		// Validate user input for right integers
		this.validateInput = function(sides){
			for (i = 0, len = sides.length; i < len; i++) { 
				if(sides[i] <= 0 || isNaN(parseInt(sides[i]))){
					return false;
				}
			}

			return true;
		};

		// Checking input length to decide about shape type
		this.getType = function(sides){
			let type;

        	type = sides.length === 1 && 'Circle' || 
        		sides.length === 2 && 'Line' || 
        		sides.length === 3 && 'Triangle' || 
        		sides.length === 4 && 'Foursquare';

        	return type;
		};

		// Decide about type and create related Object
	    this.create = function (...sides) {
	        var shape, type, renderer;

	        // If user input numbers are true and greater than zero
	        if(this.validateInput(sides)){
	        	type = this.getType(sides);

	        	// Calling ShapesMediator to get related Object 
		        shape = new (ShapesMediator.getShape(type))(...sides);

		        renderer = new RenderMachine();
		        shape.render = renderer.render;

		        return shape;
	        }
	        else{
	        	logger.show('log', '[CREATE] - Give me the right numbers buddy!')
	        	return false;
	        }
	    };

	};


	/* It is a Renderer Class
	** Now I am using this just for logging shape info
	** But for the future we may need a real canvas rendering system
	*/
	var RenderMachine = function(){

		this.render = function(){
			logger.show('info', '[RENDER] - I am a <strong>"'+this.type+'"</strong> '+this.name+'!', this);
		}

	};


	var instance;

	var _public = {
		name: "TradeShift ShapeFactory",
 
	    getInstance: function( options ) {
	      if( instance === undefined ) {
	        instance = new ShapeFactory( options );
	      }
	 
	      // Returning instance
	      return instance;
	    }
	}


	return _public;

})();
