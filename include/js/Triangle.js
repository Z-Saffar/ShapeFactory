// Adding Triangle Constructor to Shapes Mediator

ShapesMediator.addShape('Triangle', function (...sides) {
    
	this.name = 'Triangle';
	
	this.vertices = ['A', 'B', 'C'];
	this.sides = sides;

	// Returns Triangle Type
	this.getType = function(){
		let type = 'scalene';

		var [a, b, c] = this.sides;
		
		type = (a === b && b === c) && 'equilateral' || 
			((a === b && b != c) || (a === c && c != b) || (b === c && c != a))  && 'isosceles' ||
			'scalene';

		logger.show('info', 'This is a <strong>"'+ type + '"</strong> triangle!');
		return type;
	};


	// Returns Triangle Perimeter
	this.getPerimeter = function(){
		let [a, b, c] = this.sides;
		let perimeter = parseInt(a) + parseInt(b) + parseInt(c);

		logger.show('info', 'Triangle perimeter is <strong>"'+ perimeter + '"</strong> !');
		return perimeter;
	};

	this.getArea = function(){
		let p = this.getPerimeter();
		let area = parseInt(Math.sqrt(p * (p-this.sides[0]) * (p-this.sides[1]) * (p-this.sides[2])));

		logger.show('info', 'Triangle area is <strong>"'+ area + '"</strong> !');
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