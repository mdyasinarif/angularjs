
var app = angular.module("myModle", []);
app.controller("dataController", function ($scope) {
    var listOfEmploye = [
        {FirstName: "Yasin", LastName: "Arif", Gender: "Male", Salary: 20000},
        {FirstName: "Sohan", LastName: "Korin", Gender: "FeMale", Salary: 14000},
        {FirstName: "Sagor", LastName: "Aoo", Gender: "Male", Salary: 12000},
        {FirstName: "Minhaz", LastName: "Rahaman", Gender: "FeMale", Salary: 16000}

    ];
    $scope.employees = listOfEmploye;
});
app.controller("datajson", function ($scope, $http) {
    var url = "records.json";
    $http.get(url).success(function (response) {
        $scope.employees = response;
    });

});
app.controller("fromValid", function ($scope) {
    $scope.reset = function () {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
    };
});


