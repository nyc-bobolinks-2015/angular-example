var app = angular.module('steven', []);

app.controller('MainController', function($scope, $http) {
  $scope.data = [1,2,3,4,5];
  $http({
    method: 'GET',
    url: 'http://api.reddit.com'
  }).then(function(response){
    $scope.redditArray = response.data.data.children;
    console.log($scope.redditArray);
  });
});

