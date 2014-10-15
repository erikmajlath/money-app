/*global define*/

define([
    'app',
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/bill',
], function (App, $, _, Backbone, JST, BillView) {
    'use strict';

    var BillsListView = Backbone.View.extend({
        template: JST['bills_list-template'],

        events: {},

        initialize: function () {
            console.log('[BillsListView] initialize');

            this.listenTo(this.collection, 'add:from:interface', this.prependOne);

            //Stores all the children
            this.children = _([]);
            //View mode day|week|month
            this.viewMode = 'day';
        },

        catchEvent: function(e){
            console.log(e);
        },

        render: function () {
            console.log('[BillsListView] render');
            this.$el.html(this.template.render());
            this.renderEntries();

            return this;
        },

        renderEntries: function(){
            console.log('[BillsListView] renderEntries');
            //todo depending on the this.viewMode
            var cont = this.$('.bills-list'),
                entries = this.collection.getToday();

            _.each(entries, function(item){
                var view = new BillView({model: item});
                cont.append(view.render().el);
            })
        },

        renderNextEntries: function () {
            var cont = this.$('.bills-list'),
                that = this,
                count = 5;

            this.collection
                .chain()
                .rest(this.offset)
                .first(count)
                .each(function(item){
                    var view = new BillView({model: item});
                    cont.append(view.render().el);
                });

            this.offset += count;
        },

        destroy: function(){
            console.log('[BillsListView] destroy');

            this.children.each(function(item){
                item.destroy();
            })

            this.remove();
        },

        prependOne: function(model){
            var cont = this.$('.bills-list'),
                view = new BillView({model: model});
                
            cont.prepend(view.render().el);
        },
    });

    return BillsListView;
});
