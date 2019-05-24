var myApp = angular.module('myApp',[]);
myApp.controller('myControler',function ($scope) {
    
    $scope.newUser = {};
    $scope.info = "";
    $scope.users =[
        {fullname:"Yasin Arif",username:"yasin",email:"yasin@gmail.com"},
        {fullname:"Sohna Arif",username:"sohan",email:"sohan@gmail.com"},
        {fullname:"Arif Sohan",username:"yasin",email:"arif@gmail.com"},
    ];
    $scope.saveuser = function () {
        $scope.users.push($scope.newUser);
        $scope.info = "New User Added Successfully!";
        
    };
    $scope.selectUser = function (user) {
        $scope.clickedUser = user;
    };
    $scope.updateUser = function () {
         $scope.newUser = {};
         $scope.info = "Update Successfully!";
    };
    $scope.deleteUser = function () {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
         $scope.info = "Delete Successfully!";
    };
   $scope.clearInfo = function () {
        $scope.info = "";
    };
    
});

