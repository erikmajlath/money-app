/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BillModel = Backbone.Model.extend({

        initialize: function() {
        },

        defaults: {
            subject: 'Common bill',
            category: -1,
            tags: [],
            cost: 0,
            currency: 'EUR',
            date: new Date().getTime(),
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return BillModel;
});
