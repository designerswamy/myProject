angular.module("register")
    .controller("registerCtrl",["$scope", function($scope){
        $scope.user = {};
        $scope.registerUser = function(){
            console.log($scope.user);
            console.log($scope.selectedCountry);
        }
        $scope.loadStates = function(){
            $scope.statesList = [];
            angular.forEach(states, function(item){
                if(item.countrycode == $scope.selectedCountry.code){
                    $scope.statesList.push(item);
                }
            })
            
            //console.log($scope.selectedCountry.code);
        }
        $scope.countries = [
            {"name":"India",
            "code":"IN"},
            {"name":"America",
            "code":"US"}
        ]
        var states = [
            {"countrycode":"IN",
            "statecode":"TG",
            "statename":"Telangana"},
            {"countrycode":"IN",
            "statecode":"AP",
            "statename":"AndhraPradesh"},
            {"countrycode":"US",
            "statecode":"AZ",
            "statename":"Arizona"},
            {"countrycode":"US",
            "statecode":"TX",
            "statename":"Texas"}
            
            
        ]
    }]);