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
            subject: 'Common bill',
            category: -1,
            tags: [],
            cost: 0,
            currency: 'EUR',
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
