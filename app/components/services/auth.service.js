'use strict';

// var Auth = function($firebaseAuth) {
// 	var ref = new Firebase('https://findme-test-app.firebaseio.com/');
// 	console.log('Auth access');
// 	return $firebaseAuth(ref);
// }

// Auth.$inject = ['$firebaseAuth'];
// app.config('Auth', Auth);

// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     var ref = new Firebase("https://findme-test-app.firebaseio.com/");
//     return $firebaseAuth(ref);
//   }
// ]);

app.factory('Auth', function(){
  //var ref = new Firebase("https://findme-test-app.firebaseio.com/");
  //return $firebaseAuth(ref);	

  var config = {
    apiKey: "AIzaSyD2IWabR-iuXQzl-U0KhfKOXLFeZHe2pZU",
    authDomain: "findme-test-app.firebaseapp.com",
    databaseURL: "https://findme-test-app.firebaseio.com",
    storageBucket: "findme-test-app.appspot.com",
  };
  
  firebase.initializeApp(config);

	return firebase.database().ref();
})

