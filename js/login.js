angular.module('login', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
	.state('loginIndex', {
	  url: '/login-index',
	  templateUrl: 'templates/login/login-index.html',
	  controller: 'SignInCtrl'
	})
	.state('loginpassword', {
	  url: '/login-password',
	  templateUrl: 'templates/login/login-password.html'
	})
	.state('loginregister', {
	  url: '/login-register',
	  templateUrl: 'templates/login/login-register.html'
	})


   $urlRouterProvider.otherwise('/login-index');

})

.controller('SignInCtrl', function($scope, $state) {

  $scope.signIn = function(user) {
	console.log('Sign-In', user);
	$state.go('tabs.home');
  };

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
