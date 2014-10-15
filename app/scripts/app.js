define([
    'backbone',
    'wreqr'
], function (Backbone, wreqr) {
    'use strict';

    var App = {};

    App.vent = new Backbone.Wreqr.EventAggregator();
    App.reqres = new Backbone.Wreqr.RequestResponse();

    //Export
    window.App = App;

    return App;
});