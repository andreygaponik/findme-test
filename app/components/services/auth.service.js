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

	return {

    getRef: function(user) {
      return firebase.database().ref(user)
    },

    getId: function() {
      $rootScope.asd = 'asd';
      return $rootScope.asd
    },

    getName: function() {
      auth.$onAuthStateChanged(function(user) {
        $rootScope.uid = user.uid;   

        if (user != null) {
          // $rootScope.displayName = user.displayName;
          $rootScope.user = user;
          $rootScope.email = user.email;
          
          firebase.database().ref('/users/' + $rootScope.uid).on('value', function(snapshot) {
            $rootScope.user = snapshot.val();

            // users data
            
            $rootScope.firstName = $rootScope.user.firstName;
            $rootScope.lastName = $rootScope.user.lastName;
            // $rootScope.avatar = $rootScope.user.avatar;
            
            $rootScope.$digest();

            // return $rootScope.user;
          });            
 
        }    

      });
    },



    // authState: function() {      

    //   firebase.database().ref('/users/' + $rootScope.uid).on('value', function(snapshot) {
    //     $rootScope.user = snapshot.val();

    //     auth.$onAuthStateChanged(function(user) {
    //       if (user != null) {
    //         $rootScope.displayName = user.displayName;
    //         $rootScope.email = user.email;
    //         $rootScope.uid = user.uid; 
    //       }    

    //     });

    //     console.log($rootScope.user);
            
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
      $rootScope.user = undefined;
      auth.$signOut();
        
      $location.path('/signin'); 

      }
  }

})

