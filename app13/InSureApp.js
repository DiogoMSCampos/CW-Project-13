var app = angular.module('InSureApp',[]);

app.controller('cwCtrl', function($scope){
	$scope.default_user = {docID:"Teresa1234", pwd:"Roque"};
	
	$scope.reset_form = function() {
		$scope.user = angular.copy($scope.default_user);
		};
	$scope.reset_form();
	
});


app.controller('patientInfo', function($scope, $http){
	$http.get("http://127.0.0.1:8090/patData.json")
	.then(function(response)
	{
		$scope.patientsData = response.data.patientsData;
	});
});


