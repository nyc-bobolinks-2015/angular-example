var app = angular.module('steven', []);

app.controller('MainController', function($scope, $http) {

  $scope.removeSomething = function() {
    $scope.sampleArray.pop();
  };

  $scope.addSomething = function() {

    var max = Math.max(0, Math.max.apply(null, $scope.sampleArray));
    $scope.sampleArray.push(max+1);
  };

  $scope.sampleArray = [1,2,3,4,5];

  // Now let's load some stuff from reddit

  $http({
    method: 'GET',
    url: 'http://api.reddit.com'
  }).then(function(response){
    $scope.redditArray = response.data.data.children;
    console.log($scope.redditArray);
  });
});

