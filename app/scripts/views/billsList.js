/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BillsListView = Backbone.View.extend({
        template: JST['billsList-template'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            console.log('BillsListView initialize');
        },

        render: function () {
            console.log('BillsListView render');
            this.$el.html(this.template.render({bills: this.collection.toJSON()}));

            return this;
        },

        destroy: function(){
            console.log('BillsListView destroy');

            this.remove();
        },
    });

    return BillsListView;
});
