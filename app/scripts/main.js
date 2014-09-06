/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
        },
        hogan:{
            exports: 'Hogan',
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        foundation: '../bower_components/foundation/js/foundation',
        //Need to use older one cause of hogan.js package
        hogan: '../bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
        localstorage: 'vendor/backbone.localStorage',
    }
});

require([
    'backbone',
    'routes/account',
], function (Backbone, AccountRouter) {

    //Global space for app
    Backbone.app = {};
    Backbone.app.r = {};
    Backbone.app.c = {};
    Backbone.app.v = {};

    new AccountRouter({});
});
