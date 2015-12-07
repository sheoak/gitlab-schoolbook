(function () {
    'use strict';

    module.exports = function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './views/home/home.html'
            })
        .otherwise({
            redirectTo: '/'
        });

    };

}());
