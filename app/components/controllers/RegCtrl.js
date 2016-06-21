var RegCtrl = function($scope, $firebaseAuth, Auth) {
	$scope.name = 'Register';
	console.log('RegCtrl test');



	$scope.createUser = function() {

    var auth = $firebaseAuth();

    $scope.message = null;
    $scope.error = null;

    auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
    .then(function(response) {
     console.log(response);
    })
    .catch(function(err) {
     console.log('Something went wrong', err);
    });


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

RegCtrl.$inject = ['$scope', '$firebaseAuth','Auth'];
app.controller('RegCtrl', RegCtrl);