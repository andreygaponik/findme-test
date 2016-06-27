var SettingsCtrl = function($scope, $rootScope, Auth, $timeout) {

  // console.log(Auth.getRef('asd'));
  Auth.getName();

	$scope.submit = function() {

    // Uncaught Error: [$rootScope:inprog] 

    $rootScope.firstName = $scope.firstName;
    $rootScope.lastName = $scope.lastName;

		firebase.database().ref('users/' + $rootScope.uid).set({
      firstName: $rootScope.firstName,
      lastName: $rootScope.lastName
    });

    console.log($rootScope.firstName);
    console.log($rootScope.lastName);

    $('#modal').modal();

    $timeout(function() {
      $('#modal').modal('hide');
    }, 2000);

	};




}

SettingsCtrl.$inject = ['$scope', '$rootScope', 'Auth', '$timeout'];
app.controller('SettingsCtrl', SettingsCtrl);