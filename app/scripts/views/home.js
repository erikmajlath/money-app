/*global define*/

define([
    'app',
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/bills_add',
    'views/bills_list'
], function (App, $, _, Backbone, JST, BillsAddView, BillsListView) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['home-template'],

        tagName: 'div',

        id: '',

        className: 'home-view',

        events: {},

        initialize: function () {
            console.log('[HomeView] initialize');
            
            var billsCollection = App.reqres.request('collection:bills');

            this.addBillView = new BillsAddView({collection: billsCollection});
            this.billsListView = new BillsListView({collection: billsCollection}); 
        },

        render: function () {
            console.log('[HomeView] render');

            this.$el.html(this.template.render());
            this.addBillView.setElement(this.$('.aBC')).render();
            this.billsListView.setElement(this.$('.bLC')).render();

            return this;
        },

        destroy: function(){
            console.log('[HomeView] destroy');

            this.addBillView.destroy();
            this.billsListView.destroy();
            this.remove();
        },
    });

    return HomeView;
});
