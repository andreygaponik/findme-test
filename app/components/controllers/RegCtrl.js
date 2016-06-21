var RegCtrl = function($scope, Auth) {
	$scope.name = 'Register';
	console.log('RegCtrl test');



	$scope.createUser = function() {
		console.log('clck');
      $scope.message = null;
      $scope.error = null;

      // Auth.$createUser({
      //   email: $scope.email,
      //   password: $scope.password
      // }).then(function(userData) {
      //   $scope.message = "User created with uid: " + userData.uid;
      // }).catch(function(error) {
      //   $scope.error = error;
      // });		



  };

 //    $scope.removeUser = function() {
 //      $scope.message = null;
 //      $scope.error = null;

 //      Auth.$removeUser({
 //        email: $scope.email,
 //        password: $scope.password
 //      }).then(function() {
 //        $scope.message = "User removed";
 //      }).catch(function(error) {
 //        $scope.error = error;
 //      });
 //    };
};

RegCtrl.$inject = ['$scope', 'Auth'];
app.controller('RegCtrl', RegCtrl);