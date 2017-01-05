define(['controllers/controllersModule'], function(controllersModule) {

    controllersModule.controller('LoginCtrl', function($scope, $state) {

        $scope.handleLogin = function() {
            var userdata = $scope.user;

            if (userdata) {

                if (userdata.userid === "test@gmail.com" && userdata.password === "test123") {
                    $state.go('dashboard');
                } else {
                    alert("invalid credentials.");
                }

            } else {
            	alert("invalid credentials.");
            }

        }

    });

});
