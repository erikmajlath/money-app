/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/bill',
], function ($, _, Backbone, JST, BillView) {
    'use strict';

    var BillsListView = Backbone.View.extend({
        template: JST['billsList-template'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            console.log('BillsListView initialize');
            Backbone.app.v.BillsListView = this;

            this.listenTo(this.collection, 'add', this.billAdded);

            this.children = _([]);
            this.offset = 0;
        },

        catchEvent: function(e){
            console.log(e);
        },

        render: function () {
            console.log('BillsListView render');
            this.$el.html(this.template.render());

            this.renderNextEntries();

            return this;
        },

        renderNextEntries: function () {
            var cont = this.$('.bLL'),
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
            console.log('BillsListView destroy');

            this.children.each(function(item){
                item.destroy();
            })

            this.remove();
        },

        billAdded: function(model){
            if(this.collection.indexOf(model) < this.offset){
                var cont = this.$('.bLL'),
                    view = new BillView({model: model});
                    
                cont.prepend(view.render().el);
            }
        },
    });

    return BillsListView;
});
