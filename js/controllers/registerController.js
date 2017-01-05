define(['controllers/controllersModule'], function(controllersModule) {

    controllersModule.controller('registerCtrl', function($scope, registerService) {

        $scope.registerUser = function() {
        	var userData = registerService.registerUser();
        	console.log(userData);
        }

    });

});
