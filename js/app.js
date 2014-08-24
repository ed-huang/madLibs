// app.js

//ngAnimate Dependency
angular.module('myApp', ['ngAnimate'])

//Create an Angular Controller
.controller('FormCtrl', function($scope) {
    var submitted;
	//Submit Funciton when Form is submitted
	$scope.submit = function() {
        // console.log($scope.madLibs.male_name);
		$scope.submitted = true;
		
		//If the form is valid
		if($scope.myForm.$valid) {
			$scope.results = true;
		} else {
			console.log("Invalid");
		}
	};
	
	//Reset Our Variables and Form
	$scope.reset = function() {

  		$scope.madLibs = {};
  		$scope.myForm.$setPristine();
  		$scope.submitted = false;
  		$scope.results = false;
	}
});