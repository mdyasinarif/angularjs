var myApp = angular.module('myModule', []);
            myApp.controller('myCtrl', function ($scope) {
                $scope.showData = function (){
                    $scope.employees = employees;
                };
                $scope.hidData = function (){
                    $scope.employees = '';
                };
                
            });