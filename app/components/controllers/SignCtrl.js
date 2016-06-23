var SignCtrl = function($scope, $rootScope, $firebaseAuth, $location, Auth) {

	// $scope.logIn = Auth.logIn;

	var auth = $firebaseAuth();

	$scope.logIn = function() {
		auth
		.$signInWithEmailAndPassword($scope.email, $scope.password)
		.then(function(response) {
			console.log(response);
			
			$location.path('/home');
		})
		.catch(function(error) {
		  console.log(error);
		});
	};
};

SignCtrl.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$location', 'Auth'];
app.controller('SignCtrl', SignCtrl);

