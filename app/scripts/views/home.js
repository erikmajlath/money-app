/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/addBill',
    'views/billsList'
], function ($, _, Backbone, JST, AddBillView, BillsListView) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['home-template'],

        tagName: 'div',

        id: '',

        className: 'homeView',

        events: {},

        initialize: function () {
            console.log('HomeView initialize');
            Backbone.app.v.HomeView = this;

            this.addBillView = new AddBillView({});
            this.billsListView = new BillsListView({collection: Backbone.app.c.bills}); 
        },

        render: function () {
            console.log('HomeView render');

            this.$el.html(this.template.render({data: 'ahoj'}));
            this.addBillView.setElement(this.$('.aBC')).render();
            this.billsListView.setElement(this.$('.bLC')).render();

            return this;
        },

        destroy: function(){
            console.log('HomeView destroy');

            this.addBillView.destroy();
            this.billsListView.destroy();
            this.remove();
        },
    });

    return HomeView;
});
