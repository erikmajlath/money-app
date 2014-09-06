/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'hogan',
], function ($, _, Backbone, JST, Hogan) {
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
        },

        render: function () {
            console.log('HomeView render');

            this.$el.html(this.template.render({data: 'ahoj'}));

            return this;
        }
    });

    return HomeView;
});
