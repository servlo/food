//******* Grub Bunny ******
//Author @Nathaniel Taylor
//Version 0.1

var app = angular.module('GrubBunny', ['ui.router']);

//******* Routes *******
//Configure the routes
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			});
			
		$stateProvider
			.state('posts', {
			  url: '/posts/{id}',
			  templateUrl: '/posts.html',
			  controller: 'PostsCtrl'
			});

		$urlRouterProvider.otherwise('home');
	}]);

//****** Services ******
//factory to manage post data
app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}]);

//****** Controllers ******
//main controller
app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

$scope.posts = posts.posts;

$scope.addPost = function(){
	if(!$scope.title || $scope.title === '') { return; }
	$scope.posts.push({
		title: $scope.title, 
		link: $scope.link,
		upvotes: 0,
		comments: [
			{author: 'Joe', body: 'cool post!', upvotes: 0},
			{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0},
			]
	});
	$scope.title = '';
	$scope.link = '';
	};

$scope.incrementUpvotes = function(post) {
	post.upvotes += 1;
	};

}]);

//Posts Controller

app.controller('PostsCtrl', [
	'$scope',
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts){

	$scope.post = posts.posts[$stateParams.id];

}]);
