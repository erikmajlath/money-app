/*global define*/

define([
    'underscore',
    'backbone',
    'models/bill',
    'localstorage',
], function (_, Backbone, BillModel, LocalStorage) {
    'use strict';

    var BillsCollection = Backbone.Collection.extend({
        model: BillModel,

        localstorage: new LocalStorage('bills'),

        initialize: function(){
            this.pointer = 0;
        },

        comparator: function(item){
            return parseInt(item.get('date'))*(-1);
        },

        getFirstTen: function(){
            return this.first(10);
        },

        getTen: function(offset){
            var offset = offset || 0;
            var models = this.models.slice(10);
            return _(models).first(10);
        },
    });

    return BillsCollection;
});
