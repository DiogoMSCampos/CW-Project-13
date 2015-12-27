

var app = angular.module('InSureApp',[]);

app.controller('defaultCtrl', function($scope, $http){


	$http.get("http://localhost:9000/patients").then(function(response) {
		$scope.patients = response.data;
	});

	$http.get("http://localhost:9000/acts").then(function(response) {
		$scope.acts = response.data;
	});

	$http.get("http://localhost:9000/statusP").then(function(response) {
		$scope.statusP = response.data;
	});

	$http.get("http://localhost:9000/actsforPat").then(function(response) {
		$scope.actsforPat = response.data;
	});


	$scope.first=true;
	$scope.second=false;
	$scope.third=false;

	$scope.GoPage2 = function (){

		$scope.first=false;
	    $scope.third=false;
		$scope.second=true;}

	$scope.GoPage3 = function (){
		$scope.first=false;
	    $scope.second=false;
	    $scope.third=true; 
	}
	
	$scope.GoPage1 = function (){

		$scope.first=true;
	    $scope.third=false;
		$scope.second=false; }




});