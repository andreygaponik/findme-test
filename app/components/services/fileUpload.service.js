app.service('fileUpload', ['$rootScope', function ($rootScope) {
  // this.uploadFileToUrl = function(file, uploadUrl){
  //   var fd = new FormData();
  //   fd.append('file', file);
  //   $http.post(uploadUrl, fd, {
  //     transformRequest: angular.identity,
  //     headers: {'Content-Type': undefined}
  //   })
  //   .success(function(){
  //     console.log('access')
  //   })
  //   .error(function(){
  //     console.log('error')
  //   });
  // }

  var storageRef = firebase.storage().ref();
  var metadata = {
    contentType: 'image/jpeg'
  };
  $rootScope.file = $rootScope.avatar;

  return {
    uploadFile: function() {

      var uploadTask = storageRef.child('images/' + $rootScope.file.name).put($rootScope.file, metadata); // upload
      console.log('upload');

      uploadTask.on('state_changed', function(snapshot){
        var downloadURL = uploadTask.snapshot.downloadURL;
        $rootScope.avatarImg = downloadURL;
        console.log($rootScope.avatarImg);  
      }, function(error) {
      }, function() {
              
      });
    }

    // getUrl: function() {
    //   var uploadTask = storageRef.child('images/' + $rootScope.file.name).put($rootScope.file);
      
    //   uploadTask.on('state_changed', function(snapshot){
    //   }, function(error) {
    //   }, function() {
    //     var downloadURL = uploadTask.snapshot.downloadURL;
    //     $rootScope.avatar = downloadURL;
    //     console.log($rootScope.avatar);        
    //   });
    // }
  }

}]);