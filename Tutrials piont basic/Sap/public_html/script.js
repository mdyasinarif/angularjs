var mainApp = angular.module("mainApp",['ngRoute']);
mainApp.config(['$routeProvider ', function ($routeProvider) {
        $routeProvider.
                when('/',{
                    templateUrl:'templet/main.html',
                    controller : 'mainController'
                    
                });
                when('/contract',{
                    templateUrl:'templet/contract',
                    controller : 'contractController'
                });
                otherwise({
                    redirectTo:'/'
                });
    }]);
mainApp.controller("mainController",function ($scope) {
    $scope.msg ="this is the main page Yasin";
});
mainApp.controller("contractController",function ($scope) {
    $scope.msg ="this is the contract page to Yasin";
});
