/*global define*/

define([
    'jquery',
    'backbone',
    'collections/bills',
    'collections/categories',
    'collections/tags',
], function ($, Backbone, BillsCollection, CategoriesCollection, TagsCollection) {
    'use strict';

    var AccountRouter = Backbone.Router.extend({
        routes: {
        }


    });

    return AccountRouter;
});
