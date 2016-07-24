// Adding Foursquare Constructor to Shapes Mediator

ShapesMediator.addShape('Foursquare', function (...sides) {
    
	this.name = 'Foursquare';
	
	this.vertices = ['A', 'B', 'C', 'D'];
	this.sides = sides;

	// Returns Foursquare Type
	this.getType = function(){
		// Method to return Foursquare's type
	};


	// Returns Foursquare Perimeter
	this.getPerimeter = function(){
		let [a, b, c, d] = this.sides;
		let perimeter = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);

		logger.show('info', 'Foursquare perimeter is <strong>"'+ perimeter + '"</strong> !');
		return perimeter;
	};

	this.getArea = function(){
		let p = this.getPerimeter();
		let area = parseInt(parseInt(sides[0]) * parseInt(sides[1]));

		logger.show('info', 'Foursquare area is <strong>"'+ area + '"</strong> !');
		return area;
	};


	return {
		name: this.name,
		type: this.getType(),
		perimeter: this.getPerimeter(),
		area: this.getArea(), 
		sides: this.sides
	}

});
