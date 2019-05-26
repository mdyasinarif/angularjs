var controllersModule = angular.module("exampleApp.Controllers",[]);

controllersModule.controller("dayCtrl",function ($scope,day) {
    $scope.day = day.today;
});
controllersModule.controller("tomorrowCtrl",function ($scope,day) {
    $scope.day = day.tomorrow;
});
