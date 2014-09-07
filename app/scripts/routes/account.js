/*global define*/

define([
    'jquery',
    'backbone',
    'collections/bills',
    'collections/categories',
    'collections/tags',
    'views/home',
], function ($, Backbone, BillsCollection, CategoriesCollection, TagsCollection,
    HomeView) {
    'use strict';

    var AccountRouter = Backbone.Router.extend({

        routes: {
            '': 'home',
            'reports': 'reports',
            'info': 'info',
            '*path': 'home',
        },

        initialize: function(){
            console.log('AccountRouter initialize');

            Backbone.app.r.account = this;
            Backbone.app.c.bills = new BillsCollection();
            Backbone.app.c.categories = new CategoriesCollection();
            Backbone.app.c.tags = new TagsCollection();

            //Fetch
            Backbone.app.c.bills.fetch();

            this.currentView = null;

            //Must be at the end
            console.log('Backbone.history started');
            Backbone.history.start();
        },

        changeView: function(view){
            console.log('Changing View');

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
            console.log('Home route');
            this.changeView(new HomeView());
        },
    });

    return AccountRouter;
});
