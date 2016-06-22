'use strict';

var HomeCtrl = function($scope, $rootScope, $firebaseAuth, Auth) {
	// var auth = $firebaseAuth();
	// var user = $firebaseAuth().currentUser;

	// Auth.authState();

	$scope.logOut = Auth.logOut;
	// $rootScope.name1 = $scope.name1;


	console.log(Auth.getRef());


	// auth.$onAuthStateChanged(function(user) {
	// 	if (user != null) {
	// 	  name = user.displayName;
	// 	  $scope.email = user.email;
	// 	  photoUrl = user.photoURL;
	// 	  $scope.uid = user.uid; 
	// 	}
	//   console.log($scope.uid)
	// });

	// $scope.signOut = function() {
	// 	auth.$signOut()
	// 	.then(function() {
	// 	  // Sign-out successful.
	// 	  console.log('logout')
	// 	}, function(error) {
	// 	  // An error happened.
	// 	  console.log(error)
	// 	});
	// }

}

HomeCtrl.$inject = ['$scope', '$rootScope', '$firebaseAuth', 'Auth'];
app.controller('HomeCtrl', HomeCtrl);