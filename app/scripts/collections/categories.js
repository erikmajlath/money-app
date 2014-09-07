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

        url: '',

        localstorage: new LocalStorage('categories'),

        
    });

    return CategoriesCollection;
});
