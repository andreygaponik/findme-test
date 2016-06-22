'use strict';

app.factory('Auth', function($rootScope, $firebaseAuth, $location){
  //var ref = new Firebase("https://findme-test-app.firebaseio.com/");
  //return $firebaseAuth(ref);	

  var config = {
    apiKey: "AIzaSyD2IWabR-iuXQzl-U0KhfKOXLFeZHe2pZU",
    authDomain: "findme-test-app.firebaseapp.com",
    databaseURL: "https://findme-test-app.firebaseio.com",
    storageBucket: "findme-test-app.appspot.com"
  };

  firebase.initializeApp(config);

  var auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(user) {
    if (user != null) {
      $rootScope.displayName = user.displayName;
      $rootScope.email = user.email;
      $rootScope.uid = user.uid; 

      
    }


    $rootScope.user = user;
    // $rootScope.displayName = user.displayName;
    // $rootScope.email = user.email;
    // $rootScope.uid = user.uid;


  });
  // function writeUserData(userId, name, email) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email
  //   });
  // }

	return {

    getRef: function() {
      return firebase.database().ref()
    },

    getId: function() {
      return $rootScope.name1
    },



    // addData: function(response) {
    //   firebase.database().ref('users/' + response.uid).set({
    //     uid: 'asd'
    //   });
    // },

    // not working

    // createUser: function() {
    //   $rootScope.message = null;
    //   $rootScope.error = null;

    //   auth
    //     .$createUserWithEmailAndPassword($scope.email, $scope.password)
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(err) {
    //       console.log('Something went wrong', err);
    //     });
    // },

    // logIn: function() {
    //   auth
    //     .$signInWithEmailAndPassword($rootScope.email, $rootScope.password)
    //     .then(function(response) {
    //       console.log(response);
    //       $location.path('/home');
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },

    logOut: function() {
        auth.$signOut();
        $rootScope.user = undefined;
        $location.path('/signin'); 
      }
  }

})

