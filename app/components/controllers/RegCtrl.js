var RegCtrl = function($scope, $rootScope, $firebaseAuth, $location, Auth) {
  // $scope.createUser = Auth.createUser;
  var auth = $firebaseAuth();
    

	$scope.createUser = function() {
    $scope.message = null;
    $scope.error = null;
    $rootScope.name1 = $scope.name1;

    auth
      .$createUserWithEmailAndPassword($scope.email, $scope.password)
      .then(function(response) {

        firebase.database().ref('users/' + response.uid).set({
          firstName: $rootScope.name1
        });

        Auth.logOut();
        $location.path('/signin');
        console.log(response.uid);

      })
      .catch(function(err) {
        console.log('Something went wrong', err);
      });

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

RegCtrl.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$location', 'Auth'];
app.controller('RegCtrl', RegCtrl);
