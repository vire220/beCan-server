// js/services/beacons.js

angular.module('becanService', [])

.factory('Beacons', function($http){
    return {
        get : function() {
            return $http.get('/api/beacons');
        },
        create : function(beaconData) {
            return $http.post('/api/beacons', beaconData);
        },
        delete : function(id) {
            return $http.delete('/api/beacons/' + id);
        }
    }
});