//First we define our module
angular.module('steven', []);

/* From now forward `angular.module('steven')` will return our module and we can 
attach controllers, services etc to it.
*/
angular.module('steven').controller('MainController', function($scope, $http) {

  /* 
    functions defined on the scope are accessible to html event handler attributes, so an 
    element with onclick="removeSomething()" will cause this function to run on click
  */
  $scope.removeSomething = function() {
    $scope.sampleArray.pop();
  };

  $scope.addSomething = function() {
    var max = Math.max(0, Math.max.apply(null, $scope.sampleArray));
    $scope.sampleArray.push(max+1);
  };

  $scope.sampleArray = [1,2,3,4,5];

  /* 
    Now let's load some stuff from reddit
    You might also want to look at the docs for ngResource at 
    (https://docs.angularjs.org/api/ngResource/service/$resource) 
    ngResource simplifies talking to REST APIs
  */

  $http({
    method: 'GET',
    url: 'http://api.reddit.com'
  }).then(function(response){
    $scope.redditArray = response.data.data.children;
    console.log($scope.redditArray);
  });
  
});

