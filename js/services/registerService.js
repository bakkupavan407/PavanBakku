define(['services/servicesModule'], function(servicesModule) {

    servicesModule.factory('registerService', function($http) {

        return {
            registerUser: function() {
                $http.get('http://localhost:8070/users')
                    .then(function(response) {
                        return response;
                    });
            }
        }

    });

});
