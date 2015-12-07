(function () {

    'use strict';

    require('angular');
    require('angular-route');
    require('restangular');

    //load modules
    //TODO: add them to modules array
    //require('components/home/home.init.js');
    require('./components/home/home.module');

    var app = angular.module("myapp", [
            'ngRoute',
            'restangular',
            'myapp.home',
    ]);

    // config file
    //app.constant("config", require('./constant'));

    // expose vendor libraries
    app.constant('_',       require('lodash'));
    app.constant('moment',  require('moment'));

    //app.config(require('./routes'));
    //app.config(require('./config'));

    //app.run(require('./run'));

}());
