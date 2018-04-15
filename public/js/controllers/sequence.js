// js/controllers/sequence.js

angular.module('becanController')

    .controller('sequenceController', function($scope, $http) {
        $scope.content = "Sequence Content";
        
        $http.get('/api/sequences/')
        .success(function(data){
            $scope.content = data;
        })
        .error(function(data){
            $scope.content = data;
        });
    });
