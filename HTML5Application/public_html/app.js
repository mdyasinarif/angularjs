// creating module
var myApp = angular.module('myModule', []);
// ceteating controller
var myController = function ($scope) {
    $scope.msg = "Hello World";
};
// reguster model to controller
myApp.controller('myCrt', myController);


// aulter native method  for mvc
var myApp = angular.module('myModule', []);
myApp.controller('myCtrl', function ($scope) {

    var student = {
        name: "Yasin Arif",
        score: 84
    };
    var tutrials = {
        title: "Angulerjs",
        episode: 2,
        author: "Md Yasin Arif"
    };

    var fruts = ['apple', 'mango', 'banana', 'pinaple', 'jackfruts'];
    var employees = [
        {name: 'Yasin', post: 'CEO', sallary: 20000},
        {name: 'Arif', post: 'Mamager', sallary: 10000},
        {name: 'Sohan', post: 'Sales Man', sallary: 8000},
        {name: 'karif', post: 'manager', sallary: 12000},
        {name: 'kudus', post: 'kamal', sallary: 8000},
        {name: 'kaiser', post: 'Sales Man', sallary: 8000},
        {name: 'sovon', post: 'Sales Man', sallary: 8000},
        {name: 'masbba', post: 'Sales Man', sallary: 8000},
        {name: 'mowsumi', post: 'Sales Man', sallary: 8000},
        {name: 'mim', post: 'Sales Man', sallary: 8000},
        {name: 'tarin', post: 'Sales Man', sallary: 8000},
        {name: 'orin', post: 'Sales Man', sallary: 8000}
    ];

    var countries = [{
            name: 'Bangladesh',
            cites: [
                {name: 'Dhaka'},
                {name: 'Cummila'},
                {name: 'Chittagong'}
            ]
        }, {
            name: 'India',
            cites: [
                {name: 'Kolkata'},
                {name: 'Bomba'},
                {name: 'Banglor'}
            ]
        }];

    $scope.msg = "Hello Yasin";
    $scope.msg2 = "Mr.";
    $scope.student = student;
    $scope.tutrials = tutrials;
    $scope.fruts = fruts;
    $scope.employees = employees;
    $scope.countries = countries;

    var image = 'abc.png';

    $scope.image = image;

//    $scope.var = true;
});


