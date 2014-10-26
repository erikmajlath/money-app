/*global define*/

define([
    'underscore',
    'backbone',
    'moment',
], function (_, Backbone, moment) {
    'use strict';

    var CategoryModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            version: '0.1.0',
            parent: 0,
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return CategoryModel;
});
