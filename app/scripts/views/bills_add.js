/*global define*/

define([
    'app',
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'bootstrap',
], function (App, $, _, Backbone, JST) {
    'use strict';

    var BillsAddView = Backbone.View.extend({
        template: JST['bills_add-template'],

        tagName: 'div',

        events: {
            'submit form': 'submitForm',
        },

        initialize: function () {
            console.log('[BillsAddView] initialize');
        },

        render: function () {
            console.log('[BillsAddView] render');
            this.$el.html(this.template.render());

            return this;
        },

        destroy: function(){
            console.log('[BillsAddView] destroy');
            this.remove();
        },

        submitForm: function(e){
            console.log('[BillsAddView] submitForm');

            e.preventDefault();            

            var model = this.collection.create({
                subject: this.$('#subject-input').val(),
                cost: this.$('#cost-input').val(),
            });

            this.collection.trigger('add:from:interface', model);

            this.render();
        },
    });

    return BillsAddView;
});
