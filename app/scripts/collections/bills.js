/*global define*/

define([
    'app',
    'underscore',
    'backbone',
    'models/bill',
    'localstorage',
    'moment',
], function (App ,_, Backbone, BillModel, LocalStorage, moment) {
    'use strict';

    var BillsCollection = Backbone.Collection.extend({
        model: BillModel,

        localStorage: new LocalStorage('bills'),

        initialize: function(){
            var that = this;

            this.pointer = 0;

            //Set this publicly available
            App.reqres.setHandler('collection:bills', function(){
                return that;
            });
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

        getToday: function(){
            console.log('[BillsCollection] getToday');
            var today = moment();
            return this.filter(function(item){
                return moment(item.get('date')).isSame(moment(), 'day');
            });
        },

        getWeek: function(){
            console.log('[BillsCollection] getWeek');
        },

        getMonth: function(){
            console.log('[BillsCollection] getMonth');
        },
    });

    return BillsCollection;
});
