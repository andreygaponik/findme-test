var SettingsCtrl = function($scope, $rootScope, Auth, $timeout, fileUpload) {

  // console.log(Auth.getRef('asd'));
  Auth.getName();

  // storage fb, in other service/ctrl

  var storageRef = firebase.storage().ref();
  var imagesRef = storageRef.child('images');
  console.log(imagesRef);

  $scope.uploadFile = function(){
    var file = $scope.avatar;
    var uploadTask = storageRef.child('images/' + file.name).put(file); // upload
    $rootScope.file = file;
    $rootScope.uploadTask = uploadTask;

    console.log('file is ' );
    console.dir(file);
    // var uploadUrl = "/fileUpload";
    // fileUpload.uploadFileToUrl(file, uploadUrl);
  };

	$scope.submit = function() {
    // avatar

    console.log($rootScope.uploadTask);
    console.log($rootScope.file);

    $rootScope.uploadTask.on('state_changed', function(snapshot){

    }, function(error) {

    }, function() {
      var downloadURL = $rootScope.uploadTask.snapshot.downloadURL;
      console.log(downloadURL);

    });

    // $rootScope.uploadTask.on('state_changed', function(snapshot){
    //   $rootScope.test = snapshot;

    //   console.log($rootScope.test);
    // }, function(error) {
    // }, function() {
    //   var downloadURL = $rootScope.uploadTask.snapshot.downloadURL;
    // });


    // Uncaught Error: [$rootScope:inprog] 
    $rootScope.firstName = $scope.firstName;
    $rootScope.lastName = $scope.lastName;

		firebase.database().ref('users/' + $rootScope.uid).set({
      firstName: $rootScope.firstName,
      lastName: $rootScope.lastName
    });

    // $rootScope.uploadTask.on('state_changed', function(snapshot){
    // }, function(error) {
    // }, function() {
    //   var downloadURL = $rootScope.uploadTask.snapshot.downloadURL;
    // });

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