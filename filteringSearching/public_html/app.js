var myApp = angular.module('myModule', []);
myApp.filter('status',function(){
    return function (status){
        if (status===1) {
            return "Paid";
        }
        if (status===2) {
            return "UnPaid";
        }
        if (status===3) {
            return "Deducted from Advance";
        }
    };
} );
myApp.controller('myCtrl', function ($scope) {
    
    var employees = [
        {name: 'Yasin', post: 'CEO', salary: 20000,status:1},
        {name: 'Arif', post: 'Mamager', salary: 10000,status:2},
        {name: 'Sohan', post: 'Sales Man', salary: 8000,status:3},
        {name: 'karif', post: 'manager', salary: 12000,status:1},
        {name: 'kudus', post: 'kamal', salary: 8000,status:1},
        {name: 'kaiser', post: 'Sales Man', salary: 8000,status:3},
        {name: 'sovon', post: 'Sales Man', salary: 8000,status:1},
        {name: 'masbba', post: 'Sales Man', salary: 8000,status:2},
        {name: 'mowsumi', post: 'Sales Man', salary: 8000,status:1},
        {name: 'mim', post: 'Sales Man', salary: 8000,status:3},
        {name: 'tarin', post: 'Sales Man', salary: 8000,status:1},
        {name: 'orin', post: 'Sales Man', salary: 8000,status:1}
    ];
    $scope.employees = employees;



});