/*global define*/

define([
    'underscore',
    'backbone',
    'models/category',
    'localstorage'
], function (_, Backbone, CategoryModel, LocalStorage) {
    'use strict';

    var CategoriesCollection = Backbone.Collection.extend({
        model: CategoryModel,

        localStorage: new LocalStorage('categories'),

        initialize: function(){
            var that = this;
            //Set handler
            App.reqres.setHandler('collection:categories', function(){
                return that;
            });
        },
    });

    return CategoriesCollection;
});
