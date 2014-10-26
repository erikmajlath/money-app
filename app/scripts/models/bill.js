/*global define*/

define([
    'underscore',
    'backbone',
    'moment'
], function (_, Backbone, moment) {
    'use strict';

    var BillModel = Backbone.Model.extend({

        initialize: function() {
        },

        defaults: {
            version: '0.1.0',
            category: 0,
            date: moment().millisecond(),
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return BillModel;
});
