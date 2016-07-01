var SettingsCtrl = function($scope, $rootScope, Auth, $timeout, fileUpload) {

  // console.log(Auth.getRef('asd'));
  Auth.getName();

  // storage fb, service/ctrl

  // var storageRef = firebase.storage().ref();
  // var metadata = {
  //   contentType: 'image/jpeg'
  // };

  var metadata = {
    contentType: 'image/jpeg'
  };

  $scope.uploadFile = function(){
    $rootScope.file = $scope.avatar;

    if ($rootScope.file.type === metadata.contentType) {

      console.log('access');

      // var uploadTask = storageRef.child('images/' + $rootScope.file.name).put($rootScope.file, metadata); // upload
      fileUpload.uploadFile();

      // uploadTask.on('state_changed', function(snapshot){
      // }, function(error) {
      //   console.log(error);

      // }, function() {
      //   $rootScope.downloadURL = uploadTask.snapshot.downloadURL;
      // });

    } else {
      console.log('incorrect file format')
    }

    console.log('file is ' );
    console.dir($rootScope.file);

  };  



	$scope.submit = function() {
    // avatar

    console.log($rootScope.uploadTask);
    console.log($rootScope.file);

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

SettingsCtrl.$inject = ['$scope', '$rootScope', 'Auth', '$timeout', 'fileUpload'];
app.controller('SettingsCtrl', SettingsCtrl);

// myApp.directive('fileModel', ['$parse', function ($parse) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;
            
//             element.bind('change', function(){
//                 scope.$apply(function(){
//                     modelSetter(scope, element[0].files[0]);
//                 });
//             });
//         }
//     };
// }]);

// myApp.service('fileUpload', ['$http', function ($http) {
//     this.uploadFileToUrl = function(file, uploadUrl){
//         var fd = new FormData();
//         fd.append('file', file);
//         $http.post(uploadUrl, fd, {
//             transformRequest: angular.identity,
//             headers: {'Content-Type': undefined}
//         })
//         .success(function(){
//         })
//         .error(function(){
//         });
//     }
// }]);

// myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
    
//     $scope.uploadFile = function(){
//         var file = $scope.myFile;
//         console.log('file is ' );
//         console.dir(file);
//         var uploadUrl = "/fileUpload";
//         fileUpload.uploadFileToUrl(file, uploadUrl);
//     };
    
// }]);