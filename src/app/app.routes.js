(function () {
    'use strict';

    module.exports = function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.jade'
            })
        .otherwise({
            redirectTo: '/'
        });

    };

}());
