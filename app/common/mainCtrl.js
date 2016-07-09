angular .module("fashionBay")
.controller("mainCtrl",["$scope", function ($scope){
    $scope.appName="FASHION BAY"
    $scope.mainHeader = "app/common/header.tpl.html";
    $scope.templateURL = "app/home/home.tpl.html";
    
    $scope.loadPage = function(pageType){
        if(pageType == "register"){
            $scope.templateURL = "app/register/register.tpl.html";
        }else if(pageType == "login"){
            $scope.templateURL = "app/login/login.tpl.html";
        }
    }
    
  
}])