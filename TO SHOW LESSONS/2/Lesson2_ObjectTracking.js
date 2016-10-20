/*
	Lesson: Object Creation
	Description: 
		Be able to create a new Truck object and keep track of the javascript object in memory. Learn more about creating / destroying objects
	Goal:
		Have a simple form that allows the user to change aspects about the truck object and update the model.
	Requirements:
		Use the truck/engine/features object from the previous lesson. Create an HTML form that allows the user to enter text for a name, mpg, and paint color.
		Default all the other variables...eg...."V8" engine.
		Allow the user to click a button which then displays the data on the screen....with the values entered from the text fields.
		See stubs below....add your truck javascript classes in this file
*/

var Lesson = Lesson || {};

var RRAY = [];

Lesson.Engine = function() {
	this.eType = "";
	this.horsepower = 0;
	this.mpg = 0;
};
Lesson.Feature = function() {
	this.fName = "";
	this.fDescription = "";
};
Lesson.Truck = function() {
	this.tName = "";
	this.lpNumber = "";
	this.numDoors = 0;
	this.paintColor = "";
	this.currentMileage = 0;
	this.modelYear = 0;
	this.modelMake = "";
	this.engine = new Lesson.Engine();
	this.feature = new Lesson.Feature();
	this.id = 0;
};

Lesson.Run = function() {
	var vehicleName = $("#vehicleName").val();
	var vehicleMPG = $("#vehicleMPG").val();
	var vehicleColor = $("#vehicleColor").val();

	var truck = new Lesson.Truck();
	truck.tName = vehicleName;
	truck.engine.mpg = vehicleMPG;
	truck.paintColor = vehicleColor;
	truck.id = Math.random();

	if (truck.name == "") {
		alert("Name can't be empty.");
	}
	else if (truck.mpg <= 0) {
		alert("MPGs can't be 0 or below.")
	}
	else if (truck.paintColor == "") {
		alert("Color can't be empty.")
	}
	else {
		var text = JSON.stringify(truck);		
		var table = $("#vehicleTable");
		var editButton = "<button onclick='Lesson.deleteVehicle("+ truck.id + ")'>DELETE - " + truck.tName + "</button>";
		
		var row = $("<TR>").attr("id", truck.id);
		
		row.append($("<TD>").html(vehicleName));
		row.append($("<TD>").html(vehicleMPG));
		row.append($("<TD>").html(vehicleColor));
		row.append($("<TD>").html(truck.id));
		row.append($("<TD>").html(editButton));
		
		$(table).find("tbody").append(row);
				 
		Lesson.clearForm();
		
		RRAY.push(truck);
		
		$("#vehicleName").focus();
		
		return RRAY;
	}
};

Lesson.clearForm = function () {
	var form = document.getElementById("testForm").reset();
};
//--something is wrong here... It's not removing the right element from the array
Lesson.deleteVehicle = function(id){
	//--remove from DOM
	var x = document.getElementById(id);
	x.remove();
	//--remove from array
	for (var i = 0; i < RRAY.length; i++) {
			if (RRAY[i].id == id) {
				RRAY.splice(i, 1);
				break;
			}
	}
};

//--KNOCKOUT TEST
// $(document).ready(function(){
	 // ko.applyBindings(new ViewModel());
// });
// var ViewModel = function (){
	
// };