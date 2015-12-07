(function () {

    'use strict';

    var lodash = require('lodash');

    require('angular');
    require('angular-route');
    require('restangular');

    //load modules
    //TODO: add them to modules array
    //require('components/home/home.init.js');
    require('./components/home/home.module');

    var app = angular.module("myapp", [
            'ngRoute',
     //       'restangular',
            'myapp.home',
            'app.template'
    ]);

    // config file
    app.constant("config", require('./app.constant'));

    // expose vendor libraries
    app.constant('_', lodash);
    app.constant('moment',  require('moment'));

    app.config(require('./app.routes'));
    //app.config(require('./app.config'));

    //app.run(require('./run'));

}());
