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
            text: 'Common bill',
            category: -1,
            tags: [],
            amount: 0,
            currency: 'EUR',
            date: 0,
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return BillModel;
});
