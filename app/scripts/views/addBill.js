/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var AddBillView = Backbone.View.extend({
        template: JST['addBill-template'],

        tagName: 'div',

        events: {
            'click .aBSB': 'clickSubmit',
        },

        initialize: function () {
            console.log('AddBillView initialize');
        },

        render: function () {
            console.log('AddBillView render');
            this.$el.html(this.template.render());

            return this;
        },

        destroy: function(){
            console.log('AddBillView destroy');
            this.remove();
        },

        clickSubmit: function(){
            var subject = $('.aBS').val(),
                cost = $('.aBCo').val();

            Backbone.app.c.bills.create({
                subject: subject,
                cost: cost,
            });

            this.render();
        },
    });

    return AddBillView;
});
