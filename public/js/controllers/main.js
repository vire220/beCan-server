// js/controllers/main.js

angular.module('becanController')

    .controller('mainController', function($scope, $http, Beacons) {
        $scope.formData = {};
        $scope.updateMessage = "";

        // when landing on the page, get all beacons and show them
        Beacons.get()
            .success(function(data) {
                $scope.beacons = data;
            });

        // when submitting the add form, send the text to the node API
        $scope.createBeacon = function() {
            if (!$.isEmptyObject($scope.formData)) {
                Beacons.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.beacons = data; // assign our new list of todos
                    });
            }
        };

        $scope.deleteBeacon = function(id) {
            Beacons.delete(id)
                .success(function(data) {
                    $scope.beacons = data; // assign our new list of beacons
                });
        };

        $scope.updateBeacon = function(beacon) {
            Beacons.update(beacon.beaconId, beacon)
                .success(function(data) {
                    beacon = data;
                    $scope.updateMessage = "Saved Successfully!!";
                })
                .error(function(data) {
                    $scope.updateMessage = "Error saving: " + data;
                });
        }

        $scope.editAction = function(id) {
            $("#form-" + id + " #edit-action").toggleClass("hide");
            $("#form-" + id + " #update-action").toggleClass("hide");

            $("#form-" + id + " :input").prop("disabled", false);
            $("#form-" + id + " input").prop("disabled", false);
        };

        $scope.$on('$viewContentLoaded', function() {
            $('.collapsible').collapsible();
            $(".button-collapse").sidenav();
            $('select').formSelect();
            console.log("init");
        });
    });
