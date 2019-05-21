/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('myModule',[]);
myApp.controller('myCtrl',function ($scope){
    var employees =[
        {name:'yasin',post:'CEO',salary:20000},
        {name:'arif',post:'CEO',salary:20000},
        {name:'yasin',post:'CEO',salary:20000},
        {name:'yasin',post:'CEO',salary:20000},
        {name:'yasin',post:'CEO',salary:20000},
        {name:'yasin',post:'CEO',salary:20000}
    ];
    $scope.employees = employees;
});