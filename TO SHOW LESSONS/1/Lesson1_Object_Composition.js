/* 
	Lesson: Object Composition
	Description: 
		Be able to understand how to form complex objects. Complex objects will be objects with nested objects inside of them.
	Goal: 
		Create a class that "models" a real world object. The real world object in this case will be a Truck.
	Requirements:
		Create a program that has an empty run method. I have created the namespace already for this. See stub code below.
		   The class must allow for the following characteristics
				License Plate Number
				Number of Doors
				Paint Color
				Current Mileage......210123
				Model Year.....1986
				Model Make...."Dodge"
				Engine
					EngineType....."V8"
					Horsepower
					MPG
				Features.......array []
					 Feature Name
					 Feature Description
*/


var Lesson = Lesson || {}; //--JS Namespace

Lesson.Engine = function () {
	this.eType = "".toUpperCase();
	this.horsepower = 0;
	this.mpg = 0;
};
Lesson.Features = function (){
	this.name = "".toUpperCase();
	this.description = "".toUpperCase();
};
Lesson.Truck = function() {
	this.lpNumber = "".toUpperCase();
	this.numDoors = 0;
	this.paintColor = "".toUpperCase();
	this.currentMileage = 0;
	this.modelYear = 0;
	this.modelMake = "".toUpperCase();
	this.engine = new Lesson.Engine();
	this.feature = new Lesson.Features();
};

Lesson.addObjectHTML = function (truck) {
	for (var attribute in truck) {
		var element = document.createElement("li");

		if (typeof truck[attribute] == "object") { //--if it's an object, throw it back into the function
			Lesson.addObjectHTML(truck[attribute]);
		}
		else {
			var text = document.createTextNode(attribute + ": " + truck[attribute]);
			element.appendChild(text);
			document.getElementById("list").appendChild(element);
		}		
	};
};
				
Lesson.Run = function() {
	var truck = new Lesson.Truck();

	truck.lpNumber = "0A56A5";
	truck.numDoors = 5;
	truck.paintColor = "Orange"	;
	truck.currentMileage = 100560;
	truck.modelYear = 1899;
	truck.modelMake = "BILL";

	truck.engine.eType = "V8";
	truck.engine.horsepower = 849;
	truck.engine.mpg = 561;

	truck.feature.name = "Flame Thrower Upper";
	truck.feature.description = "Lights things on fire";

	Lesson.addObjectHTML(truck);

	console.log(truck);
	return truck;
};