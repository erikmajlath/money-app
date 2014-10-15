/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BillView = Backbone.View.extend({
        template: JST['bill-template'],

        events: {},

        initialize: function () {
            console.log('[BillView] initialize');
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log('[BillView] render');
            this.$el.html(this.template.render(this.model.toJSON()));

            return this;
        },

        destroy: function(){
            console.log('[BillView] destroy');

            this.remove();
        },
    });

    return BillView;
});
