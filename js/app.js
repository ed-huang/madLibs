angular.module('myApp', ['ngAnimate'])
	.controller('FormCtrl', function($scope, $rootScope) {
		$scope.submit = function() {
			if($scope.myForm.$valid) {
				console.log("Valid");
				$rootScope.results = true;
			} else {
				console.log("Invalid");
				
			}
		};
		$scope.reset = function() {
			console.log("clicked");
      		$scope.madLibs = {};
      		console.log($scope.madLibs);
      		$scope.myForm.$setPristine();
      		$scope.submitted = false;
      		$rootScope.results = false;
		}
	})
	.controller('MyCtrl', function($scope) {
		$scope.madLibs = 
		{
			// male_name: 'male name',
			// job_title: 'job title',
			// tedious_task: 'tedious task',
			// dirty_task: 'dirty task',
			// celebrity: 'celebrity',
			// useless_skill: 'useless skill',
			// obnoxious_celebrity: 'obnoxious celebrity',
			// huge_number: 'huge number',
			// adjective: 'adjective'
		};
	});