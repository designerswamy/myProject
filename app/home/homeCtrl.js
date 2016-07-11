angular.module('home')
    .controller('homeCtrl',["$scope", function($scope){
        $scope.products= [
            {
                imageUrl:"",
                name:"",
                price:"",
                description:"",
                category:"Men"
            }
        ]
    }])

    
}])