/*global define*/

define([
    'underscore',
    'backbone',
    'models/tag',
    'localstorage',
], function (_, Backbone, TagModel, LocalStorage) {
    'use strict';

    var TagsCollection = Backbone.Collection.extend({
        model: TagModel,

        localstorage: new LocalStorage('tags'),
    });

    return TagsCollection;
});
