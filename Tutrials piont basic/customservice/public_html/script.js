var mainApp = angular.module('myModle',[]);
mainApp.factory('MathService',function () {
    var factory ={};
    factory.multiply = function (a,b) {
        return a * b;
    };
    return factory;
});
mainApp.service('calcService',function (MathService) {
    this.square = function (a) {
        return MathService.multiply(a,a);
    }
})

mainApp.controller('calcController',function ($scope,calcService) {
    $scope.square  = function (){
        $scope.result = calcService.square($scope.number);
    };
});