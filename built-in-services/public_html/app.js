// Buit-in services are $scope,$log,$location,$http,$timeout
var myApp = angular.module('myModule', []);
myApp.controller('myCtrl', function ($scope, $log) {
    $log.info("Hello Yasin");
});
myApp.controller('myCtrl2', function ($scope) {
    console.log("Hello Yasin from consol");
});
myApp.controller('myCtrl3', function ($scope, $location) {
//    $scope.hello = $location.absUrl();
//               $scope.hello = $location.port();
//                $scope.hello = $location.host();
});
myApp.controller('myCtrl4', function ($scope, $http) {
    $http.get('employee.json')
            .then(function (response) {
                $scope.employees = response.data;
            });
});
myApp.controller('myCtrl5', function ($scope, $timeout) {
    $scope.country = "Bangladesh";
    $timeout(function () {
        $scope.country = "India";
    },3000);
});
myApp.controller('myCtrl6', function ($scope, $interval) {
    $scope.clock = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.clock = new Date().toLocaleTimeString();
    },1000);
});