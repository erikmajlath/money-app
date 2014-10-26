/*global define*/

define([
    'app',
    'jquery',
    'backbone',
    'collections/bills',
    'collections/categories',    
    'views/home',
], function (App, $, Backbone, BillsCollection, CategoriesCollection, HomeView) {
    'use strict';

    var SimpleRouter = Backbone.Router.extend({

        routes: {
            '': 'home',
            'reports': 'reports',
            'info': 'info',
            '*path': 'home',
        },

        initialize: function(){
            console.log('[SimpleRouter] initialize');
            window.SimpleRouter = this;

            var that = this;

            //Initialize Collections
            this.billsCollection = new BillsCollection();
            this.categoriesCollecton = new CategoriesCollection();

            this.billsCollection.fetch();
            this.categoriesCollecton.fetch();

            //Storing current view
            this.currentView = null;

            //Must be at the end
            console.log('[SimpleRouter] Backbone.history started');
            Backbone.history.start();
        },

        changeView: function(view){
            console.log('[SimpleRouter] Changing View');

            //Remove current view
            if(this.currentView){
                this.currentView.destroy();
            }

            //Render our new view
            $('main').html(view.render().el);

            //Set curent view
            this.currentView = view;
        },

        home: function(){
            console.log('[SimpleRouter] Home route');
            this.changeView(new HomeView());
        },
    });

    return SimpleRouter;
});
